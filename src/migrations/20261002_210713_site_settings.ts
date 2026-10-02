import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "site_settings_offices" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"address" varchar NOT NULL
  );
  
  CREATE TABLE "site_settings" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"phone" varchar,
  	"email" varchar,
  	"license" varchar,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  DROP TABLE "contact_section_offices" CASCADE;
  DROP TABLE "footer_offices" CASCADE;
  ALTER TABLE "site_settings_offices" ADD CONSTRAINT "site_settings_offices_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."site_settings"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "site_settings_offices_order_idx" ON "site_settings_offices" USING btree ("_order");
  CREATE INDEX "site_settings_offices_parent_id_idx" ON "site_settings_offices" USING btree ("_parent_id");
  ALTER TABLE "contact_section" DROP COLUMN "telephone";
  ALTER TABLE "contact_section" DROP COLUMN "email";
  ALTER TABLE "contact_section" DROP COLUMN "license";
  ALTER TABLE "header" DROP COLUMN "phone";
  ALTER TABLE "header" DROP COLUMN "license";
  ALTER TABLE "footer" DROP COLUMN "phone";
  ALTER TABLE "footer" DROP COLUMN "email";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "contact_section_offices" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"address" varchar NOT NULL
  );
  
  CREATE TABLE "footer_offices" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"address" varchar NOT NULL
  );
  
  DROP TABLE "site_settings_offices" CASCADE;
  DROP TABLE "site_settings" CASCADE;
  ALTER TABLE "contact_section" ADD COLUMN "telephone" varchar;
  ALTER TABLE "contact_section" ADD COLUMN "email" varchar;
  ALTER TABLE "contact_section" ADD COLUMN "license" varchar;
  ALTER TABLE "header" ADD COLUMN "phone" varchar;
  ALTER TABLE "header" ADD COLUMN "license" varchar;
  ALTER TABLE "footer" ADD COLUMN "phone" varchar;
  ALTER TABLE "footer" ADD COLUMN "email" varchar;
  ALTER TABLE "contact_section_offices" ADD CONSTRAINT "contact_section_offices_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."contact_section"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_offices" ADD CONSTRAINT "footer_offices_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "contact_section_offices_order_idx" ON "contact_section_offices" USING btree ("_order");
  CREATE INDEX "contact_section_offices_parent_id_idx" ON "contact_section_offices" USING btree ("_parent_id");
  CREATE INDEX "footer_offices_order_idx" ON "footer_offices" USING btree ("_order");
  CREATE INDEX "footer_offices_parent_id_idx" ON "footer_offices" USING btree ("_parent_id");`)
}
