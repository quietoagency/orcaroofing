import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "contact_section_offices" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"address" varchar NOT NULL
  );
  
  CREATE TABLE "contact_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar NOT NULL,
  	"description" varchar,
  	"image_id" integer NOT NULL,
  	"telephone" varchar,
  	"email" varchar,
  	"license" varchar,
  	"block_name" varchar
  );
  
  ALTER TABLE "contact_section_offices" ADD CONSTRAINT "contact_section_offices_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."contact_section"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "contact_section" ADD CONSTRAINT "contact_section_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "contact_section" ADD CONSTRAINT "contact_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "contact_section_offices_order_idx" ON "contact_section_offices" USING btree ("_order");
  CREATE INDEX "contact_section_offices_parent_id_idx" ON "contact_section_offices" USING btree ("_parent_id");
  CREATE INDEX "contact_section_order_idx" ON "contact_section" USING btree ("_order");
  CREATE INDEX "contact_section_parent_id_idx" ON "contact_section" USING btree ("_parent_id");
  CREATE INDEX "contact_section_path_idx" ON "contact_section" USING btree ("_path");
  CREATE INDEX "contact_section_image_idx" ON "contact_section" USING btree ("image_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "contact_section_offices" CASCADE;
  DROP TABLE "contact_section" CASCADE;`)
}
