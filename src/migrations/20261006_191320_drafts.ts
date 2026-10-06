import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__services_materials_v_groups_services_icon" AS ENUM('bell', 'certified', 'checkCircle', 'deck', 'documentCheck', 'glasses', 'gutter', 'locationHeart', 'meditation', 'messages', 'money', 'paintBrush', 'paymentCard', 'roof', 'roofCleaning', 'roofInsulation', 'roofRepair', 'roofReplacement', 'shieldCheck', 'shield', 'siding', 'smile', 'star', 'stickyNote', 'window');
  CREATE TYPE "public"."enum__pages_v_blocks_why_us_boxes_cards_icon" AS ENUM('bell', 'certified', 'checkCircle', 'deck', 'documentCheck', 'glasses', 'gutter', 'locationHeart', 'meditation', 'messages', 'money', 'paintBrush', 'paymentCard', 'roof', 'roofCleaning', 'roofInsulation', 'roofRepair', 'roofReplacement', 'shieldCheck', 'shield', 'siding', 'smile', 'star', 'stickyNote', 'window');
  CREATE TYPE "public"."enum__pages_v_blocks_map_section_variant" AS ENUM('text', 'bullets');
  CREATE TYPE "public"."enum__simple_card_section_v_cards_icon" AS ENUM('bell', 'certified', 'checkCircle', 'deck', 'documentCheck', 'glasses', 'gutter', 'locationHeart', 'meditation', 'messages', 'money', 'paintBrush', 'paymentCard', 'roof', 'roofCleaning', 'roofInsulation', 'roofRepair', 'roofReplacement', 'shieldCheck', 'shield', 'siding', 'smile', 'star', 'stickyNote', 'window');
  CREATE TYPE "public"."enum__steps_section_v_variant" AS ENUM('dark', 'light');
  CREATE TYPE "public"."enum__pages_v_version_seo_og_type" AS ENUM('website', 'article');
  CREATE TYPE "public"."enum__pages_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_posts_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__posts_v_version_category" AS ENUM('Roofing', 'Decks');
  CREATE TYPE "public"."enum__posts_v_version_seo_og_type" AS ENUM('website', 'article');
  CREATE TYPE "public"."enum__posts_v_version_status" AS ENUM('draft', 'published');
  CREATE TABLE "_pages_v_blocks_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"description" jsonb,
  	"image_id" integer,
  	"cta_label" varchar,
  	"cta_link" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_services_materials_v_groups_services" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"icon" "enum__services_materials_v_groups_services_icon",
  	"image_id" integer,
  	"url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_services_materials_v_groups" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_services_materials_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"subheading" varchar,
  	"cta_label" varchar DEFAULT 'Contact Us',
  	"cta_link" varchar DEFAULT '/contact-us',
  	"footer" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_why_us_boxes_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon" "enum__pages_v_blocks_why_us_boxes_cards_icon",
  	"title" varchar,
  	"subtitle" varchar,
  	"featured" boolean DEFAULT false,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_why_us_boxes" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"subtitle" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_card_with_image_background" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"text" jsonb,
  	"image_id" integer,
  	"cta_title" varchar,
  	"cta_link" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_reviews_reviews" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"review" varchar,
  	"name" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_reviews" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"subtitle" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_map_section_areas" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"link" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_map_section_bullets" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" jsonb,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_map_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"variant" "enum__pages_v_blocks_map_section_variant" DEFAULT 'text',
  	"title" varchar,
  	"map_url" varchar,
  	"text" varchar,
  	"link_label" varchar,
  	"link_url" varchar,
  	"footer" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_checklist_image_v_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_checklist_image_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"subheading" varchar,
  	"image_id" integer,
  	"cta_label" varchar DEFAULT 'Get a free quote',
  	"cta_link" varchar DEFAULT '#',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_simple_card_section_v_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon" "enum__simple_card_section_v_cards_icon",
  	"title" varchar,
  	"description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_simple_card_section_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"subheading" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_steps_section_v_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_steps_section_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"variant" "enum__steps_section_v_variant" DEFAULT 'dark',
  	"heading" varchar,
  	"text" varchar,
  	"image_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_faq_section_v_questions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"question" varchar,
  	"answer" jsonb,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_faq_section_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"image_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_location_cards_v_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"text" jsonb,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_location_cards_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_service_areas_list_v_counties_locations" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"location" varchar,
  	"location_url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_service_areas_list_v_counties" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_service_areas_list_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"subheading" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_blog_posts_list_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_contact_section_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"description" varchar,
  	"image_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_version_seo_json_ld" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"schema" jsonb,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_slug" varchar,
  	"version_seo_title" varchar,
  	"version_seo_description" varchar,
  	"version_seo_og_title" varchar,
  	"version_seo_og_description" varchar,
  	"version_seo_og_image_id" integer,
  	"version_seo_og_type" "enum__pages_v_version_seo_og_type" DEFAULT 'website',
  	"version_seo_no_index" boolean,
  	"version_seo_no_follow" boolean,
  	"version_seo_canonical_url" varchar,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__pages_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean
  );
  
  CREATE TABLE "_posts_v_version_post_faq_questions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"question" varchar,
  	"answer" jsonb,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_posts_v_version_seo_json_ld" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"schema" jsonb,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_posts_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_slug" varchar,
  	"version_content" jsonb,
  	"version_published_at" timestamp(3) with time zone,
  	"version_excerpt" varchar,
  	"version_featured_image_id" integer,
  	"version_cta_heading" varchar,
  	"version_cta_description" varchar,
  	"version_cta_cta_label" varchar,
  	"version_cta_cta_link" varchar,
  	"version_post_faq_title" varchar,
  	"version_post_faq_image_id" integer,
  	"version_category" "enum__posts_v_version_category",
  	"version_seo_title" varchar,
  	"version_seo_description" varchar,
  	"version_seo_og_title" varchar,
  	"version_seo_og_description" varchar,
  	"version_seo_og_image_id" integer,
  	"version_seo_og_type" "enum__posts_v_version_seo_og_type" DEFAULT 'website',
  	"version_seo_no_index" boolean,
  	"version_seo_no_follow" boolean,
  	"version_seo_canonical_url" varchar,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__posts_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean
  );
  
  ALTER TABLE "pages_blocks_hero" ALTER COLUMN "heading" DROP NOT NULL;
  ALTER TABLE "pages_blocks_hero" ALTER COLUMN "image_id" DROP NOT NULL;
  ALTER TABLE "services_materials_groups_services" ALTER COLUMN "title" DROP NOT NULL;
  ALTER TABLE "services_materials_groups_services" ALTER COLUMN "description" DROP NOT NULL;
  ALTER TABLE "services_materials_groups_services" ALTER COLUMN "icon" DROP NOT NULL;
  ALTER TABLE "services_materials_groups" ALTER COLUMN "label" DROP NOT NULL;
  ALTER TABLE "services_materials" ALTER COLUMN "heading" DROP NOT NULL;
  ALTER TABLE "pages_blocks_why_us_boxes_cards" ALTER COLUMN "icon" DROP NOT NULL;
  ALTER TABLE "pages_blocks_why_us_boxes_cards" ALTER COLUMN "title" DROP NOT NULL;
  ALTER TABLE "pages_blocks_why_us_boxes" ALTER COLUMN "title" DROP NOT NULL;
  ALTER TABLE "pages_blocks_card_with_image_background" ALTER COLUMN "title" DROP NOT NULL;
  ALTER TABLE "pages_blocks_card_with_image_background" ALTER COLUMN "image_id" DROP NOT NULL;
  ALTER TABLE "pages_blocks_reviews_reviews" ALTER COLUMN "review" DROP NOT NULL;
  ALTER TABLE "pages_blocks_reviews_reviews" ALTER COLUMN "name" DROP NOT NULL;
  ALTER TABLE "pages_blocks_reviews" ALTER COLUMN "title" DROP NOT NULL;
  ALTER TABLE "pages_blocks_map_section" ALTER COLUMN "variant" DROP NOT NULL;
  ALTER TABLE "pages_blocks_map_section" ALTER COLUMN "title" DROP NOT NULL;
  ALTER TABLE "checklist_image_items" ALTER COLUMN "title" DROP NOT NULL;
  ALTER TABLE "checklist_image_items" ALTER COLUMN "text" DROP NOT NULL;
  ALTER TABLE "checklist_image" ALTER COLUMN "heading" DROP NOT NULL;
  ALTER TABLE "checklist_image" ALTER COLUMN "image_id" DROP NOT NULL;
  ALTER TABLE "simple_card_section_cards" ALTER COLUMN "icon" DROP NOT NULL;
  ALTER TABLE "simple_card_section_cards" ALTER COLUMN "title" DROP NOT NULL;
  ALTER TABLE "simple_card_section" ALTER COLUMN "heading" DROP NOT NULL;
  ALTER TABLE "steps_section_steps" ALTER COLUMN "title" DROP NOT NULL;
  ALTER TABLE "steps_section" ALTER COLUMN "variant" DROP NOT NULL;
  ALTER TABLE "steps_section" ALTER COLUMN "heading" DROP NOT NULL;
  ALTER TABLE "steps_section" ALTER COLUMN "image_id" DROP NOT NULL;
  ALTER TABLE "faq_section_questions" ALTER COLUMN "question" DROP NOT NULL;
  ALTER TABLE "faq_section_questions" ALTER COLUMN "answer" DROP NOT NULL;
  ALTER TABLE "faq_section" ALTER COLUMN "heading" DROP NOT NULL;
  ALTER TABLE "faq_section" ALTER COLUMN "image_id" DROP NOT NULL;
  ALTER TABLE "location_cards_cards" ALTER COLUMN "title" DROP NOT NULL;
  ALTER TABLE "location_cards_cards" ALTER COLUMN "text" DROP NOT NULL;
  ALTER TABLE "service_areas_list_counties_locations" ALTER COLUMN "location" DROP NOT NULL;
  ALTER TABLE "service_areas_list_counties" ALTER COLUMN "name" DROP NOT NULL;
  ALTER TABLE "service_areas_list" ALTER COLUMN "heading" DROP NOT NULL;
  ALTER TABLE "contact_section" ALTER COLUMN "heading" DROP NOT NULL;
  ALTER TABLE "contact_section" ALTER COLUMN "image_id" DROP NOT NULL;
  ALTER TABLE "pages_seo_json_ld" ALTER COLUMN "label" DROP NOT NULL;
  ALTER TABLE "pages_seo_json_ld" ALTER COLUMN "schema" DROP NOT NULL;
  ALTER TABLE "pages" ALTER COLUMN "title" DROP NOT NULL;
  ALTER TABLE "pages" ALTER COLUMN "slug" DROP NOT NULL;
  ALTER TABLE "posts_post_faq_questions" ALTER COLUMN "question" DROP NOT NULL;
  ALTER TABLE "posts_post_faq_questions" ALTER COLUMN "answer" DROP NOT NULL;
  ALTER TABLE "posts_seo_json_ld" ALTER COLUMN "label" DROP NOT NULL;
  ALTER TABLE "posts_seo_json_ld" ALTER COLUMN "schema" DROP NOT NULL;
  ALTER TABLE "posts" ALTER COLUMN "title" DROP NOT NULL;
  ALTER TABLE "posts" ALTER COLUMN "slug" DROP NOT NULL;
  ALTER TABLE "posts" ALTER COLUMN "content" DROP NOT NULL;
  ALTER TABLE "posts" ALTER COLUMN "published_at" DROP NOT NULL;
  ALTER TABLE "pages" ADD COLUMN "_status" "enum_pages_status" DEFAULT 'draft';
  ALTER TABLE "posts" ADD COLUMN "_status" "enum_posts_status" DEFAULT 'draft';
  -- Docs that already exist were live before drafts were enabled: keep them published.
  UPDATE "pages" SET "_status" = 'published';
  UPDATE "posts" SET "_status" = 'published';
  ALTER TABLE "_pages_v_blocks_hero" ADD CONSTRAINT "_pages_v_blocks_hero_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_hero" ADD CONSTRAINT "_pages_v_blocks_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_materials_v_groups_services" ADD CONSTRAINT "_services_materials_v_groups_services_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_services_materials_v_groups_services" ADD CONSTRAINT "_services_materials_v_groups_services_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_materials_v_groups"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_materials_v_groups" ADD CONSTRAINT "_services_materials_v_groups_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_materials_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_materials_v" ADD CONSTRAINT "_services_materials_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_why_us_boxes_cards" ADD CONSTRAINT "_pages_v_blocks_why_us_boxes_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_why_us_boxes"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_why_us_boxes" ADD CONSTRAINT "_pages_v_blocks_why_us_boxes_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_card_with_image_background" ADD CONSTRAINT "_pages_v_blocks_card_with_image_background_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_card_with_image_background" ADD CONSTRAINT "_pages_v_blocks_card_with_image_background_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_reviews_reviews" ADD CONSTRAINT "_pages_v_blocks_reviews_reviews_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_reviews"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_reviews" ADD CONSTRAINT "_pages_v_blocks_reviews_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_map_section_areas" ADD CONSTRAINT "_pages_v_blocks_map_section_areas_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_map_section"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_map_section_bullets" ADD CONSTRAINT "_pages_v_blocks_map_section_bullets_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_map_section"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_map_section" ADD CONSTRAINT "_pages_v_blocks_map_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_checklist_image_v_items" ADD CONSTRAINT "_checklist_image_v_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_checklist_image_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_checklist_image_v" ADD CONSTRAINT "_checklist_image_v_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_checklist_image_v" ADD CONSTRAINT "_checklist_image_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_simple_card_section_v_cards" ADD CONSTRAINT "_simple_card_section_v_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_simple_card_section_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_simple_card_section_v" ADD CONSTRAINT "_simple_card_section_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_steps_section_v_steps" ADD CONSTRAINT "_steps_section_v_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_steps_section_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_steps_section_v" ADD CONSTRAINT "_steps_section_v_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_steps_section_v" ADD CONSTRAINT "_steps_section_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_faq_section_v_questions" ADD CONSTRAINT "_faq_section_v_questions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_faq_section_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_faq_section_v" ADD CONSTRAINT "_faq_section_v_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_faq_section_v" ADD CONSTRAINT "_faq_section_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_location_cards_v_cards" ADD CONSTRAINT "_location_cards_v_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_location_cards_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_location_cards_v" ADD CONSTRAINT "_location_cards_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_service_areas_list_v_counties_locations" ADD CONSTRAINT "_service_areas_list_v_counties_locations_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_service_areas_list_v_counties"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_service_areas_list_v_counties" ADD CONSTRAINT "_service_areas_list_v_counties_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_service_areas_list_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_service_areas_list_v" ADD CONSTRAINT "_service_areas_list_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_blog_posts_list_v" ADD CONSTRAINT "_blog_posts_list_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_contact_section_v" ADD CONSTRAINT "_contact_section_v_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_contact_section_v" ADD CONSTRAINT "_contact_section_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_seo_json_ld" ADD CONSTRAINT "_pages_v_version_seo_json_ld_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_parent_id_pages_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_seo_og_image_id_media_id_fk" FOREIGN KEY ("version_seo_og_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_posts_v_version_post_faq_questions" ADD CONSTRAINT "_posts_v_version_post_faq_questions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_version_seo_json_ld" ADD CONSTRAINT "_posts_v_version_seo_json_ld_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v" ADD CONSTRAINT "_posts_v_parent_id_posts_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."posts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_posts_v" ADD CONSTRAINT "_posts_v_version_featured_image_id_media_id_fk" FOREIGN KEY ("version_featured_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_posts_v" ADD CONSTRAINT "_posts_v_version_post_faq_image_id_media_id_fk" FOREIGN KEY ("version_post_faq_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_posts_v" ADD CONSTRAINT "_posts_v_version_seo_og_image_id_media_id_fk" FOREIGN KEY ("version_seo_og_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "_pages_v_blocks_hero_order_idx" ON "_pages_v_blocks_hero" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_hero_parent_id_idx" ON "_pages_v_blocks_hero" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_hero_path_idx" ON "_pages_v_blocks_hero" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_hero_image_idx" ON "_pages_v_blocks_hero" USING btree ("image_id");
  CREATE INDEX "_services_materials_v_groups_services_order_idx" ON "_services_materials_v_groups_services" USING btree ("_order");
  CREATE INDEX "_services_materials_v_groups_services_parent_id_idx" ON "_services_materials_v_groups_services" USING btree ("_parent_id");
  CREATE INDEX "_services_materials_v_groups_services_image_idx" ON "_services_materials_v_groups_services" USING btree ("image_id");
  CREATE INDEX "_services_materials_v_groups_order_idx" ON "_services_materials_v_groups" USING btree ("_order");
  CREATE INDEX "_services_materials_v_groups_parent_id_idx" ON "_services_materials_v_groups" USING btree ("_parent_id");
  CREATE INDEX "_services_materials_v_order_idx" ON "_services_materials_v" USING btree ("_order");
  CREATE INDEX "_services_materials_v_parent_id_idx" ON "_services_materials_v" USING btree ("_parent_id");
  CREATE INDEX "_services_materials_v_path_idx" ON "_services_materials_v" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_why_us_boxes_cards_order_idx" ON "_pages_v_blocks_why_us_boxes_cards" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_why_us_boxes_cards_parent_id_idx" ON "_pages_v_blocks_why_us_boxes_cards" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_why_us_boxes_order_idx" ON "_pages_v_blocks_why_us_boxes" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_why_us_boxes_parent_id_idx" ON "_pages_v_blocks_why_us_boxes" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_why_us_boxes_path_idx" ON "_pages_v_blocks_why_us_boxes" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_card_with_image_background_order_idx" ON "_pages_v_blocks_card_with_image_background" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_card_with_image_background_parent_id_idx" ON "_pages_v_blocks_card_with_image_background" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_card_with_image_background_path_idx" ON "_pages_v_blocks_card_with_image_background" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_card_with_image_background_image_idx" ON "_pages_v_blocks_card_with_image_background" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_reviews_reviews_order_idx" ON "_pages_v_blocks_reviews_reviews" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_reviews_reviews_parent_id_idx" ON "_pages_v_blocks_reviews_reviews" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_reviews_order_idx" ON "_pages_v_blocks_reviews" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_reviews_parent_id_idx" ON "_pages_v_blocks_reviews" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_reviews_path_idx" ON "_pages_v_blocks_reviews" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_map_section_areas_order_idx" ON "_pages_v_blocks_map_section_areas" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_map_section_areas_parent_id_idx" ON "_pages_v_blocks_map_section_areas" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_map_section_bullets_order_idx" ON "_pages_v_blocks_map_section_bullets" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_map_section_bullets_parent_id_idx" ON "_pages_v_blocks_map_section_bullets" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_map_section_order_idx" ON "_pages_v_blocks_map_section" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_map_section_parent_id_idx" ON "_pages_v_blocks_map_section" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_map_section_path_idx" ON "_pages_v_blocks_map_section" USING btree ("_path");
  CREATE INDEX "_checklist_image_v_items_order_idx" ON "_checklist_image_v_items" USING btree ("_order");
  CREATE INDEX "_checklist_image_v_items_parent_id_idx" ON "_checklist_image_v_items" USING btree ("_parent_id");
  CREATE INDEX "_checklist_image_v_order_idx" ON "_checklist_image_v" USING btree ("_order");
  CREATE INDEX "_checklist_image_v_parent_id_idx" ON "_checklist_image_v" USING btree ("_parent_id");
  CREATE INDEX "_checklist_image_v_path_idx" ON "_checklist_image_v" USING btree ("_path");
  CREATE INDEX "_checklist_image_v_image_idx" ON "_checklist_image_v" USING btree ("image_id");
  CREATE INDEX "_simple_card_section_v_cards_order_idx" ON "_simple_card_section_v_cards" USING btree ("_order");
  CREATE INDEX "_simple_card_section_v_cards_parent_id_idx" ON "_simple_card_section_v_cards" USING btree ("_parent_id");
  CREATE INDEX "_simple_card_section_v_order_idx" ON "_simple_card_section_v" USING btree ("_order");
  CREATE INDEX "_simple_card_section_v_parent_id_idx" ON "_simple_card_section_v" USING btree ("_parent_id");
  CREATE INDEX "_simple_card_section_v_path_idx" ON "_simple_card_section_v" USING btree ("_path");
  CREATE INDEX "_steps_section_v_steps_order_idx" ON "_steps_section_v_steps" USING btree ("_order");
  CREATE INDEX "_steps_section_v_steps_parent_id_idx" ON "_steps_section_v_steps" USING btree ("_parent_id");
  CREATE INDEX "_steps_section_v_order_idx" ON "_steps_section_v" USING btree ("_order");
  CREATE INDEX "_steps_section_v_parent_id_idx" ON "_steps_section_v" USING btree ("_parent_id");
  CREATE INDEX "_steps_section_v_path_idx" ON "_steps_section_v" USING btree ("_path");
  CREATE INDEX "_steps_section_v_image_idx" ON "_steps_section_v" USING btree ("image_id");
  CREATE INDEX "_faq_section_v_questions_order_idx" ON "_faq_section_v_questions" USING btree ("_order");
  CREATE INDEX "_faq_section_v_questions_parent_id_idx" ON "_faq_section_v_questions" USING btree ("_parent_id");
  CREATE INDEX "_faq_section_v_order_idx" ON "_faq_section_v" USING btree ("_order");
  CREATE INDEX "_faq_section_v_parent_id_idx" ON "_faq_section_v" USING btree ("_parent_id");
  CREATE INDEX "_faq_section_v_path_idx" ON "_faq_section_v" USING btree ("_path");
  CREATE INDEX "_faq_section_v_image_idx" ON "_faq_section_v" USING btree ("image_id");
  CREATE INDEX "_location_cards_v_cards_order_idx" ON "_location_cards_v_cards" USING btree ("_order");
  CREATE INDEX "_location_cards_v_cards_parent_id_idx" ON "_location_cards_v_cards" USING btree ("_parent_id");
  CREATE INDEX "_location_cards_v_order_idx" ON "_location_cards_v" USING btree ("_order");
  CREATE INDEX "_location_cards_v_parent_id_idx" ON "_location_cards_v" USING btree ("_parent_id");
  CREATE INDEX "_location_cards_v_path_idx" ON "_location_cards_v" USING btree ("_path");
  CREATE INDEX "_service_areas_list_v_counties_locations_order_idx" ON "_service_areas_list_v_counties_locations" USING btree ("_order");
  CREATE INDEX "_service_areas_list_v_counties_locations_parent_id_idx" ON "_service_areas_list_v_counties_locations" USING btree ("_parent_id");
  CREATE INDEX "_service_areas_list_v_counties_order_idx" ON "_service_areas_list_v_counties" USING btree ("_order");
  CREATE INDEX "_service_areas_list_v_counties_parent_id_idx" ON "_service_areas_list_v_counties" USING btree ("_parent_id");
  CREATE INDEX "_service_areas_list_v_order_idx" ON "_service_areas_list_v" USING btree ("_order");
  CREATE INDEX "_service_areas_list_v_parent_id_idx" ON "_service_areas_list_v" USING btree ("_parent_id");
  CREATE INDEX "_service_areas_list_v_path_idx" ON "_service_areas_list_v" USING btree ("_path");
  CREATE INDEX "_blog_posts_list_v_order_idx" ON "_blog_posts_list_v" USING btree ("_order");
  CREATE INDEX "_blog_posts_list_v_parent_id_idx" ON "_blog_posts_list_v" USING btree ("_parent_id");
  CREATE INDEX "_blog_posts_list_v_path_idx" ON "_blog_posts_list_v" USING btree ("_path");
  CREATE INDEX "_contact_section_v_order_idx" ON "_contact_section_v" USING btree ("_order");
  CREATE INDEX "_contact_section_v_parent_id_idx" ON "_contact_section_v" USING btree ("_parent_id");
  CREATE INDEX "_contact_section_v_path_idx" ON "_contact_section_v" USING btree ("_path");
  CREATE INDEX "_contact_section_v_image_idx" ON "_contact_section_v" USING btree ("image_id");
  CREATE INDEX "_pages_v_version_seo_json_ld_order_idx" ON "_pages_v_version_seo_json_ld" USING btree ("_order");
  CREATE INDEX "_pages_v_version_seo_json_ld_parent_id_idx" ON "_pages_v_version_seo_json_ld" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_parent_idx" ON "_pages_v" USING btree ("parent_id");
  CREATE INDEX "_pages_v_version_version_slug_idx" ON "_pages_v" USING btree ("version_slug");
  CREATE INDEX "_pages_v_version_seo_version_seo_og_image_idx" ON "_pages_v" USING btree ("version_seo_og_image_id");
  CREATE INDEX "_pages_v_version_version_updated_at_idx" ON "_pages_v" USING btree ("version_updated_at");
  CREATE INDEX "_pages_v_version_version_created_at_idx" ON "_pages_v" USING btree ("version_created_at");
  CREATE INDEX "_pages_v_version_version__status_idx" ON "_pages_v" USING btree ("version__status");
  CREATE INDEX "_pages_v_created_at_idx" ON "_pages_v" USING btree ("created_at");
  CREATE INDEX "_pages_v_updated_at_idx" ON "_pages_v" USING btree ("updated_at");
  CREATE INDEX "_pages_v_latest_idx" ON "_pages_v" USING btree ("latest");
  CREATE INDEX "_posts_v_version_post_faq_questions_order_idx" ON "_posts_v_version_post_faq_questions" USING btree ("_order");
  CREATE INDEX "_posts_v_version_post_faq_questions_parent_id_idx" ON "_posts_v_version_post_faq_questions" USING btree ("_parent_id");
  CREATE INDEX "_posts_v_version_seo_json_ld_order_idx" ON "_posts_v_version_seo_json_ld" USING btree ("_order");
  CREATE INDEX "_posts_v_version_seo_json_ld_parent_id_idx" ON "_posts_v_version_seo_json_ld" USING btree ("_parent_id");
  CREATE INDEX "_posts_v_parent_idx" ON "_posts_v" USING btree ("parent_id");
  CREATE INDEX "_posts_v_version_version_slug_idx" ON "_posts_v" USING btree ("version_slug");
  CREATE INDEX "_posts_v_version_version_featured_image_idx" ON "_posts_v" USING btree ("version_featured_image_id");
  CREATE INDEX "_posts_v_version_post_faq_version_post_faq_image_idx" ON "_posts_v" USING btree ("version_post_faq_image_id");
  CREATE INDEX "_posts_v_version_seo_version_seo_og_image_idx" ON "_posts_v" USING btree ("version_seo_og_image_id");
  CREATE INDEX "_posts_v_version_version_updated_at_idx" ON "_posts_v" USING btree ("version_updated_at");
  CREATE INDEX "_posts_v_version_version_created_at_idx" ON "_posts_v" USING btree ("version_created_at");
  CREATE INDEX "_posts_v_version_version__status_idx" ON "_posts_v" USING btree ("version__status");
  CREATE INDEX "_posts_v_created_at_idx" ON "_posts_v" USING btree ("created_at");
  CREATE INDEX "_posts_v_updated_at_idx" ON "_posts_v" USING btree ("updated_at");
  CREATE INDEX "_posts_v_latest_idx" ON "_posts_v" USING btree ("latest");
  CREATE INDEX "pages__status_idx" ON "pages" USING btree ("_status");
  CREATE INDEX "posts__status_idx" ON "posts" USING btree ("_status");`)

  const pages = await payload.find({ collection: 'pages', limit: 0, pagination: false, depth: 0, req })
  for (const doc of pages.docs) {
    await payload.update({ collection: 'pages', id: doc.id, data: { _status: 'published' }, depth: 0, req })
  }
  const posts = await payload.find({ collection: 'posts', limit: 0, pagination: false, depth: 0, req })
  for (const doc of posts.docs) {
    await payload.update({ collection: 'posts', id: doc.id, data: { _status: 'published' }, depth: 0, req })
  }
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "_pages_v_blocks_hero" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_services_materials_v_groups_services" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_services_materials_v_groups" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_services_materials_v" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_why_us_boxes_cards" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_why_us_boxes" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_card_with_image_background" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_reviews_reviews" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_reviews" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_map_section_areas" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_map_section_bullets" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_map_section" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_checklist_image_v_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_checklist_image_v" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_simple_card_section_v_cards" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_simple_card_section_v" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_steps_section_v_steps" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_steps_section_v" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_faq_section_v_questions" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_faq_section_v" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_location_cards_v_cards" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_location_cards_v" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_service_areas_list_v_counties_locations" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_service_areas_list_v_counties" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_service_areas_list_v" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_blog_posts_list_v" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_contact_section_v" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_version_seo_json_ld" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_posts_v_version_post_faq_questions" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_posts_v_version_seo_json_ld" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_posts_v" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "_pages_v_blocks_hero" CASCADE;
  DROP TABLE "_services_materials_v_groups_services" CASCADE;
  DROP TABLE "_services_materials_v_groups" CASCADE;
  DROP TABLE "_services_materials_v" CASCADE;
  DROP TABLE "_pages_v_blocks_why_us_boxes_cards" CASCADE;
  DROP TABLE "_pages_v_blocks_why_us_boxes" CASCADE;
  DROP TABLE "_pages_v_blocks_card_with_image_background" CASCADE;
  DROP TABLE "_pages_v_blocks_reviews_reviews" CASCADE;
  DROP TABLE "_pages_v_blocks_reviews" CASCADE;
  DROP TABLE "_pages_v_blocks_map_section_areas" CASCADE;
  DROP TABLE "_pages_v_blocks_map_section_bullets" CASCADE;
  DROP TABLE "_pages_v_blocks_map_section" CASCADE;
  DROP TABLE "_checklist_image_v_items" CASCADE;
  DROP TABLE "_checklist_image_v" CASCADE;
  DROP TABLE "_simple_card_section_v_cards" CASCADE;
  DROP TABLE "_simple_card_section_v" CASCADE;
  DROP TABLE "_steps_section_v_steps" CASCADE;
  DROP TABLE "_steps_section_v" CASCADE;
  DROP TABLE "_faq_section_v_questions" CASCADE;
  DROP TABLE "_faq_section_v" CASCADE;
  DROP TABLE "_location_cards_v_cards" CASCADE;
  DROP TABLE "_location_cards_v" CASCADE;
  DROP TABLE "_service_areas_list_v_counties_locations" CASCADE;
  DROP TABLE "_service_areas_list_v_counties" CASCADE;
  DROP TABLE "_service_areas_list_v" CASCADE;
  DROP TABLE "_blog_posts_list_v" CASCADE;
  DROP TABLE "_contact_section_v" CASCADE;
  DROP TABLE "_pages_v_version_seo_json_ld" CASCADE;
  DROP TABLE "_pages_v" CASCADE;
  DROP TABLE "_posts_v_version_post_faq_questions" CASCADE;
  DROP TABLE "_posts_v_version_seo_json_ld" CASCADE;
  DROP TABLE "_posts_v" CASCADE;
  DROP INDEX "pages__status_idx";
  DROP INDEX "posts__status_idx";
  ALTER TABLE "pages_blocks_hero" ALTER COLUMN "heading" SET NOT NULL;
  ALTER TABLE "pages_blocks_hero" ALTER COLUMN "image_id" SET NOT NULL;
  ALTER TABLE "services_materials_groups_services" ALTER COLUMN "title" SET NOT NULL;
  ALTER TABLE "services_materials_groups_services" ALTER COLUMN "description" SET NOT NULL;
  ALTER TABLE "services_materials_groups_services" ALTER COLUMN "icon" SET NOT NULL;
  ALTER TABLE "services_materials_groups" ALTER COLUMN "label" SET NOT NULL;
  ALTER TABLE "services_materials" ALTER COLUMN "heading" SET NOT NULL;
  ALTER TABLE "pages_blocks_why_us_boxes_cards" ALTER COLUMN "icon" SET NOT NULL;
  ALTER TABLE "pages_blocks_why_us_boxes_cards" ALTER COLUMN "title" SET NOT NULL;
  ALTER TABLE "pages_blocks_why_us_boxes" ALTER COLUMN "title" SET NOT NULL;
  ALTER TABLE "pages_blocks_card_with_image_background" ALTER COLUMN "title" SET NOT NULL;
  ALTER TABLE "pages_blocks_card_with_image_background" ALTER COLUMN "image_id" SET NOT NULL;
  ALTER TABLE "pages_blocks_reviews_reviews" ALTER COLUMN "review" SET NOT NULL;
  ALTER TABLE "pages_blocks_reviews_reviews" ALTER COLUMN "name" SET NOT NULL;
  ALTER TABLE "pages_blocks_reviews" ALTER COLUMN "title" SET NOT NULL;
  ALTER TABLE "pages_blocks_map_section" ALTER COLUMN "variant" SET NOT NULL;
  ALTER TABLE "pages_blocks_map_section" ALTER COLUMN "title" SET NOT NULL;
  ALTER TABLE "checklist_image_items" ALTER COLUMN "title" SET NOT NULL;
  ALTER TABLE "checklist_image_items" ALTER COLUMN "text" SET NOT NULL;
  ALTER TABLE "checklist_image" ALTER COLUMN "heading" SET NOT NULL;
  ALTER TABLE "checklist_image" ALTER COLUMN "image_id" SET NOT NULL;
  ALTER TABLE "simple_card_section_cards" ALTER COLUMN "icon" SET NOT NULL;
  ALTER TABLE "simple_card_section_cards" ALTER COLUMN "title" SET NOT NULL;
  ALTER TABLE "simple_card_section" ALTER COLUMN "heading" SET NOT NULL;
  ALTER TABLE "steps_section_steps" ALTER COLUMN "title" SET NOT NULL;
  ALTER TABLE "steps_section" ALTER COLUMN "variant" SET NOT NULL;
  ALTER TABLE "steps_section" ALTER COLUMN "heading" SET NOT NULL;
  ALTER TABLE "steps_section" ALTER COLUMN "image_id" SET NOT NULL;
  ALTER TABLE "faq_section_questions" ALTER COLUMN "question" SET NOT NULL;
  ALTER TABLE "faq_section_questions" ALTER COLUMN "answer" SET NOT NULL;
  ALTER TABLE "faq_section" ALTER COLUMN "heading" SET NOT NULL;
  ALTER TABLE "faq_section" ALTER COLUMN "image_id" SET NOT NULL;
  ALTER TABLE "location_cards_cards" ALTER COLUMN "title" SET NOT NULL;
  ALTER TABLE "location_cards_cards" ALTER COLUMN "text" SET NOT NULL;
  ALTER TABLE "service_areas_list_counties_locations" ALTER COLUMN "location" SET NOT NULL;
  ALTER TABLE "service_areas_list_counties" ALTER COLUMN "name" SET NOT NULL;
  ALTER TABLE "service_areas_list" ALTER COLUMN "heading" SET NOT NULL;
  ALTER TABLE "contact_section" ALTER COLUMN "heading" SET NOT NULL;
  ALTER TABLE "contact_section" ALTER COLUMN "image_id" SET NOT NULL;
  ALTER TABLE "pages_seo_json_ld" ALTER COLUMN "label" SET NOT NULL;
  ALTER TABLE "pages_seo_json_ld" ALTER COLUMN "schema" SET NOT NULL;
  ALTER TABLE "pages" ALTER COLUMN "title" SET NOT NULL;
  ALTER TABLE "pages" ALTER COLUMN "slug" SET NOT NULL;
  ALTER TABLE "posts_post_faq_questions" ALTER COLUMN "question" SET NOT NULL;
  ALTER TABLE "posts_post_faq_questions" ALTER COLUMN "answer" SET NOT NULL;
  ALTER TABLE "posts_seo_json_ld" ALTER COLUMN "label" SET NOT NULL;
  ALTER TABLE "posts_seo_json_ld" ALTER COLUMN "schema" SET NOT NULL;
  ALTER TABLE "posts" ALTER COLUMN "title" SET NOT NULL;
  ALTER TABLE "posts" ALTER COLUMN "slug" SET NOT NULL;
  ALTER TABLE "posts" ALTER COLUMN "content" SET NOT NULL;
  ALTER TABLE "posts" ALTER COLUMN "published_at" SET NOT NULL;
  ALTER TABLE "pages" DROP COLUMN "_status";
  ALTER TABLE "posts" DROP COLUMN "_status";
  DROP TYPE "public"."enum_pages_status";
  DROP TYPE "public"."enum__services_materials_v_groups_services_icon";
  DROP TYPE "public"."enum__pages_v_blocks_why_us_boxes_cards_icon";
  DROP TYPE "public"."enum__pages_v_blocks_map_section_variant";
  DROP TYPE "public"."enum__simple_card_section_v_cards_icon";
  DROP TYPE "public"."enum__steps_section_v_variant";
  DROP TYPE "public"."enum__pages_v_version_seo_og_type";
  DROP TYPE "public"."enum__pages_v_version_status";
  DROP TYPE "public"."enum_posts_status";
  DROP TYPE "public"."enum__posts_v_version_category";
  DROP TYPE "public"."enum__posts_v_version_seo_og_type";
  DROP TYPE "public"."enum__posts_v_version_status";`)
}
