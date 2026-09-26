BEGIN;
LOCK TABLE professor IN ACCESS EXCLUSIVE MODE;
DO $$
BEGIN
    IF EXISTS (
        SELECT 1 FROM information_schema.columns
        WHERE table_schema = current_schema() AND table_name = 'professor'
          AND column_name = 'super_power' AND data_type = 'ARRAY'
    ) THEN
        IF EXISTS (
            SELECT 1 FROM professor p
            WHERE NOT EXISTS (
                SELECT 1 FROM unnest(p.super_power) AS power
                WHERE nullif(btrim(power), '') IS NOT NULL
            )
        ) THEN
            RAISE EXCEPTION 'Some teachers have no non-empty super power. Fill these before migrating.';
        END IF;

        CREATE TABLE professor_super_power_backup_20260926 AS
            SELECT id, super_power FROM professor;

        CREATE FUNCTION pg_temp.first_super_power(powers varchar[]) RETURNS text
        LANGUAGE sql IMMUTABLE AS $fn$
            SELECT btrim(power) FROM unnest(powers) WITH ORDINALITY AS entries(power, position)
            WHERE nullif(btrim(power), '') IS NOT NULL ORDER BY position LIMIT 1
        $fn$;

        ALTER TABLE professor ALTER COLUMN super_power TYPE text
            USING pg_temp.first_super_power(super_power);
    END IF;

    ALTER TABLE professor ALTER COLUMN super_power SET NOT NULL;
    IF NOT EXISTS (
        SELECT 1 FROM pg_constraint WHERE conrelid = 'professor'::regclass
          AND conname = 'professor_super_power_not_blank'
    ) THEN
        ALTER TABLE professor ADD CONSTRAINT professor_super_power_not_blank
            CHECK (length(btrim(super_power)) > 0);
    END IF;
END $$;
COMMIT;
