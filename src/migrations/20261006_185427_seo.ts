import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_seo_og_type" AS ENUM('website', 'article');
  CREATE TYPE "public"."enum_posts_seo_og_type" AS ENUM('website', 'article');
  CREATE TYPE "public"."enum_redirects_type" AS ENUM('301', '302');
  CREATE TABLE "pages_seo_json_ld" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"schema" jsonb NOT NULL
  );
  
  CREATE TABLE "posts_seo_json_ld" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"schema" jsonb NOT NULL
  );
  
  CREATE TABLE "redirects" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"from" varchar NOT NULL,
  	"to" varchar NOT NULL,
  	"type" "enum_redirects_type" DEFAULT '301' NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  ALTER TABLE "services_materials" ALTER COLUMN "cta_link" SET DEFAULT '/contact-us';
  ALTER TABLE "media" ADD COLUMN "sizes_og_url" varchar;
  ALTER TABLE "media" ADD COLUMN "sizes_og_width" numeric;
  ALTER TABLE "media" ADD COLUMN "sizes_og_height" numeric;
  ALTER TABLE "media" ADD COLUMN "sizes_og_mime_type" varchar;
  ALTER TABLE "media" ADD COLUMN "sizes_og_filesize" numeric;
  ALTER TABLE "media" ADD COLUMN "sizes_og_filename" varchar;
  ALTER TABLE "pages" ADD COLUMN "seo_title" varchar;
  ALTER TABLE "pages" ADD COLUMN "seo_description" varchar;
  ALTER TABLE "pages" ADD COLUMN "seo_og_title" varchar;
  ALTER TABLE "pages" ADD COLUMN "seo_og_description" varchar;
  ALTER TABLE "pages" ADD COLUMN "seo_og_image_id" integer;
  ALTER TABLE "pages" ADD COLUMN "seo_og_type" "enum_pages_seo_og_type" DEFAULT 'website';
  ALTER TABLE "pages" ADD COLUMN "seo_no_index" boolean;
  ALTER TABLE "pages" ADD COLUMN "seo_no_follow" boolean;
  ALTER TABLE "pages" ADD COLUMN "seo_canonical_url" varchar;
  ALTER TABLE "posts" ADD COLUMN "seo_title" varchar;
  ALTER TABLE "posts" ADD COLUMN "seo_description" varchar;
  ALTER TABLE "posts" ADD COLUMN "seo_og_title" varchar;
  ALTER TABLE "posts" ADD COLUMN "seo_og_description" varchar;
  ALTER TABLE "posts" ADD COLUMN "seo_og_image_id" integer;
  ALTER TABLE "posts" ADD COLUMN "seo_og_type" "enum_posts_seo_og_type" DEFAULT 'website';
  ALTER TABLE "posts" ADD COLUMN "seo_no_index" boolean;
  ALTER TABLE "posts" ADD COLUMN "seo_no_follow" boolean;
  ALTER TABLE "posts" ADD COLUMN "seo_canonical_url" varchar;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "redirects_id" integer;
  ALTER TABLE "site_settings" ADD COLUMN "seo_site_url" varchar;
  ALTER TABLE "site_settings" ADD COLUMN "seo_site_name" varchar;
  ALTER TABLE "site_settings" ADD COLUMN "seo_title_suffix" varchar;
  ALTER TABLE "site_settings" ADD COLUMN "seo_default_description" varchar;
  ALTER TABLE "site_settings" ADD COLUMN "seo_default_og_image_id" integer;
  ALTER TABLE "site_settings" ADD COLUMN "seo_twitter_handle" varchar;
  ALTER TABLE "site_settings" ADD COLUMN "tracking_gtm_id" varchar;
  ALTER TABLE "site_settings" ADD COLUMN "tracking_ga_id" varchar;
  ALTER TABLE "site_settings" ADD COLUMN "tracking_meta_pixel_id" varchar;
  ALTER TABLE "pages_seo_json_ld" ADD CONSTRAINT "pages_seo_json_ld_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_seo_json_ld" ADD CONSTRAINT "posts_seo_json_ld_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_seo_json_ld_order_idx" ON "pages_seo_json_ld" USING btree ("_order");
  CREATE INDEX "pages_seo_json_ld_parent_id_idx" ON "pages_seo_json_ld" USING btree ("_parent_id");
  CREATE INDEX "posts_seo_json_ld_order_idx" ON "posts_seo_json_ld" USING btree ("_order");
  CREATE INDEX "posts_seo_json_ld_parent_id_idx" ON "posts_seo_json_ld" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "redirects_from_idx" ON "redirects" USING btree ("from");
  CREATE INDEX "redirects_updated_at_idx" ON "redirects" USING btree ("updated_at");
  CREATE INDEX "redirects_created_at_idx" ON "redirects" USING btree ("created_at");
  ALTER TABLE "pages" ADD CONSTRAINT "pages_seo_og_image_id_media_id_fk" FOREIGN KEY ("seo_og_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts" ADD CONSTRAINT "posts_seo_og_image_id_media_id_fk" FOREIGN KEY ("seo_og_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_redirects_fk" FOREIGN KEY ("redirects_id") REFERENCES "public"."redirects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "site_settings" ADD CONSTRAINT "site_settings_seo_default_og_image_id_media_id_fk" FOREIGN KEY ("seo_default_og_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "media_sizes_og_sizes_og_filename_idx" ON "media" USING btree ("sizes_og_filename");
  CREATE INDEX "pages_seo_seo_og_image_idx" ON "pages" USING btree ("seo_og_image_id");
  CREATE UNIQUE INDEX "posts_slug_idx" ON "posts" USING btree ("slug");
  CREATE INDEX "posts_seo_seo_og_image_idx" ON "posts" USING btree ("seo_og_image_id");
  CREATE INDEX "payload_locked_documents_rels_redirects_id_idx" ON "payload_locked_documents_rels" USING btree ("redirects_id");
  CREATE INDEX "site_settings_seo_seo_default_og_image_idx" ON "site_settings" USING btree ("seo_default_og_image_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_seo_json_ld" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "posts_seo_json_ld" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "redirects" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "pages_seo_json_ld" CASCADE;
  DROP TABLE "posts_seo_json_ld" CASCADE;
  DROP TABLE "redirects" CASCADE;
  ALTER TABLE "pages" DROP CONSTRAINT "pages_seo_og_image_id_media_id_fk";
  
  ALTER TABLE "posts" DROP CONSTRAINT "posts_seo_og_image_id_media_id_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_redirects_fk";
  
  ALTER TABLE "site_settings" DROP CONSTRAINT "site_settings_seo_default_og_image_id_media_id_fk";
  
  DROP INDEX "media_sizes_og_sizes_og_filename_idx";
  DROP INDEX "pages_seo_seo_og_image_idx";
  DROP INDEX "posts_slug_idx";
  DROP INDEX "posts_seo_seo_og_image_idx";
  DROP INDEX "payload_locked_documents_rels_redirects_id_idx";
  DROP INDEX "site_settings_seo_seo_default_og_image_idx";
  ALTER TABLE "services_materials" ALTER COLUMN "cta_link" SET DEFAULT '#';
  ALTER TABLE "media" DROP COLUMN "sizes_og_url";
  ALTER TABLE "media" DROP COLUMN "sizes_og_width";
  ALTER TABLE "media" DROP COLUMN "sizes_og_height";
  ALTER TABLE "media" DROP COLUMN "sizes_og_mime_type";
  ALTER TABLE "media" DROP COLUMN "sizes_og_filesize";
  ALTER TABLE "media" DROP COLUMN "sizes_og_filename";
  ALTER TABLE "pages" DROP COLUMN "seo_title";
  ALTER TABLE "pages" DROP COLUMN "seo_description";
  ALTER TABLE "pages" DROP COLUMN "seo_og_title";
  ALTER TABLE "pages" DROP COLUMN "seo_og_description";
  ALTER TABLE "pages" DROP COLUMN "seo_og_image_id";
  ALTER TABLE "pages" DROP COLUMN "seo_og_type";
  ALTER TABLE "pages" DROP COLUMN "seo_no_index";
  ALTER TABLE "pages" DROP COLUMN "seo_no_follow";
  ALTER TABLE "pages" DROP COLUMN "seo_canonical_url";
  ALTER TABLE "posts" DROP COLUMN "seo_title";
  ALTER TABLE "posts" DROP COLUMN "seo_description";
  ALTER TABLE "posts" DROP COLUMN "seo_og_title";
  ALTER TABLE "posts" DROP COLUMN "seo_og_description";
  ALTER TABLE "posts" DROP COLUMN "seo_og_image_id";
  ALTER TABLE "posts" DROP COLUMN "seo_og_type";
  ALTER TABLE "posts" DROP COLUMN "seo_no_index";
  ALTER TABLE "posts" DROP COLUMN "seo_no_follow";
  ALTER TABLE "posts" DROP COLUMN "seo_canonical_url";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "redirects_id";
  ALTER TABLE "site_settings" DROP COLUMN "seo_site_url";
  ALTER TABLE "site_settings" DROP COLUMN "seo_site_name";
  ALTER TABLE "site_settings" DROP COLUMN "seo_title_suffix";
  ALTER TABLE "site_settings" DROP COLUMN "seo_default_description";
  ALTER TABLE "site_settings" DROP COLUMN "seo_default_og_image_id";
  ALTER TABLE "site_settings" DROP COLUMN "seo_twitter_handle";
  ALTER TABLE "site_settings" DROP COLUMN "tracking_gtm_id";
  ALTER TABLE "site_settings" DROP COLUMN "tracking_ga_id";
  ALTER TABLE "site_settings" DROP COLUMN "tracking_meta_pixel_id";
  DROP TYPE "public"."enum_pages_seo_og_type";
  DROP TYPE "public"."enum_posts_seo_og_type";
  DROP TYPE "public"."enum_redirects_type";`)
}
