import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_services_materials_groups_services_icon" AS ENUM('bell', 'certified', 'checkCircle', 'deck', 'documentCheck', 'glasses', 'gutter', 'locationHeart', 'meditation', 'messages', 'money', 'paintBrush', 'paymentCard', 'roof', 'roofCleaning', 'roofInsulation', 'roofRepair', 'roofReplacement', 'shieldCheck', 'shield', 'siding', 'smile', 'star', 'stickyNote', 'window');
  CREATE TYPE "public"."enum_pages_blocks_why_us_boxes_cards_icon" AS ENUM('bell', 'certified', 'checkCircle', 'deck', 'documentCheck', 'glasses', 'gutter', 'locationHeart', 'meditation', 'messages', 'money', 'paintBrush', 'paymentCard', 'roof', 'roofCleaning', 'roofInsulation', 'roofRepair', 'roofReplacement', 'shieldCheck', 'shield', 'siding', 'smile', 'star', 'stickyNote', 'window');
  CREATE TYPE "public"."enum_pages_blocks_map_section_variant" AS ENUM('text', 'bullets');
  CREATE TYPE "public"."enum_simple_card_section_cards_icon" AS ENUM('bell', 'certified', 'checkCircle', 'deck', 'documentCheck', 'glasses', 'gutter', 'locationHeart', 'meditation', 'messages', 'money', 'paintBrush', 'paymentCard', 'roof', 'roofCleaning', 'roofInsulation', 'roofRepair', 'roofReplacement', 'shieldCheck', 'shield', 'siding', 'smile', 'star', 'stickyNote', 'window');
  CREATE TYPE "public"."enum_steps_section_variant" AS ENUM('dark', 'light');
  CREATE TYPE "public"."enum_posts_category" AS ENUM('Roofing', 'Decks');
  CREATE TABLE "users_sessions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"created_at" timestamp(3) with time zone,
  	"expires_at" timestamp(3) with time zone NOT NULL
  );
  
  CREATE TABLE "users" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"email" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"reset_password_requested_at" timestamp(3) with time zone,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE "media" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"alt" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric
  );
  
  CREATE TABLE "pages_blocks_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar NOT NULL,
  	"description" jsonb,
  	"image_id" integer NOT NULL,
  	"cta_label" varchar,
  	"cta_link" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "services_materials_groups_services" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL,
  	"icon" "enum_services_materials_groups_services_icon" NOT NULL,
  	"image_id" integer,
  	"url" varchar
  );
  
  CREATE TABLE "services_materials_groups" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL
  );
  
  CREATE TABLE "services_materials" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar NOT NULL,
  	"subheading" varchar,
  	"cta_label" varchar DEFAULT 'Contact Us',
  	"cta_link" varchar DEFAULT '#',
  	"footer" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_why_us_boxes_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" "enum_pages_blocks_why_us_boxes_cards_icon" NOT NULL,
  	"title" varchar NOT NULL,
  	"subtitle" varchar,
  	"featured" boolean DEFAULT false
  );
  
  CREATE TABLE "pages_blocks_why_us_boxes" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"subtitle" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_card_with_image_background" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"text" jsonb,
  	"image_id" integer NOT NULL,
  	"cta_title" varchar,
  	"cta_link" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_reviews_reviews" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"review" varchar NOT NULL,
  	"name" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_reviews" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"subtitle" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_map_section_areas" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"link" varchar
  );
  
  CREATE TABLE "pages_blocks_map_section_bullets" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" jsonb
  );
  
  CREATE TABLE "pages_blocks_map_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"variant" "enum_pages_blocks_map_section_variant" DEFAULT 'text' NOT NULL,
  	"title" varchar NOT NULL,
  	"map_url" varchar,
  	"text" varchar,
  	"link_label" varchar,
  	"link_url" varchar,
  	"footer" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "checklist_image_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"text" varchar NOT NULL
  );
  
  CREATE TABLE "checklist_image" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar NOT NULL,
  	"subheading" varchar,
  	"image_id" integer NOT NULL,
  	"cta_label" varchar DEFAULT 'Get a free quote',
  	"cta_link" varchar DEFAULT '#',
  	"block_name" varchar
  );
  
  CREATE TABLE "simple_card_section_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" "enum_simple_card_section_cards_icon" NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar
  );
  
  CREATE TABLE "simple_card_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar NOT NULL,
  	"subheading" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "steps_section_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar
  );
  
  CREATE TABLE "steps_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"variant" "enum_steps_section_variant" DEFAULT 'dark' NOT NULL,
  	"heading" varchar NOT NULL,
  	"text" varchar,
  	"image_id" integer NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "faq_section_questions" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"question" varchar NOT NULL,
  	"answer" jsonb NOT NULL
  );
  
  CREATE TABLE "faq_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar NOT NULL,
  	"image_id" integer NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "location_cards_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"text" jsonb NOT NULL
  );
  
  CREATE TABLE "location_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "service_areas_list_counties_locations" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"location" varchar NOT NULL,
  	"location_url" varchar
  );
  
  CREATE TABLE "service_areas_list_counties" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL
  );
  
  CREATE TABLE "service_areas_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar NOT NULL,
  	"subheading" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "blog_posts_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"slug" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "posts_post_faq_questions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"question" varchar NOT NULL,
  	"answer" jsonb NOT NULL
  );
  
  CREATE TABLE "posts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"slug" varchar NOT NULL,
  	"content" jsonb NOT NULL,
  	"published_at" timestamp(3) with time zone NOT NULL,
  	"excerpt" varchar,
  	"featured_image_id" integer,
  	"cta_heading" varchar,
  	"cta_description" varchar,
  	"cta_cta_label" varchar,
  	"cta_cta_link" varchar,
  	"post_faq_title" varchar,
  	"post_faq_image_id" integer,
  	"category" "enum_posts_category",
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_kv" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar NOT NULL,
  	"data" jsonb NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"global_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer,
  	"media_id" integer,
  	"pages_id" integer,
  	"posts_id" integer
  );
  
  CREATE TABLE "payload_preferences" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar,
  	"value" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_preferences_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE "payload_migrations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"batch" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "header_nav_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"href" varchar NOT NULL
  );
  
  CREATE TABLE "header" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"logo_id" integer,
  	"phone" varchar,
  	"license" varchar,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "footer_offices" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"address" varchar NOT NULL
  );
  
  CREATE TABLE "footer_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"href" varchar NOT NULL
  );
  
  CREATE TABLE "footer" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"phone" varchar,
  	"email" varchar,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  ALTER TABLE "users_sessions" ADD CONSTRAINT "users_sessions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_hero" ADD CONSTRAINT "pages_blocks_hero_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_hero" ADD CONSTRAINT "pages_blocks_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_materials_groups_services" ADD CONSTRAINT "services_materials_groups_services_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services_materials_groups_services" ADD CONSTRAINT "services_materials_groups_services_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services_materials_groups"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_materials_groups" ADD CONSTRAINT "services_materials_groups_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services_materials"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_materials" ADD CONSTRAINT "services_materials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_why_us_boxes_cards" ADD CONSTRAINT "pages_blocks_why_us_boxes_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_why_us_boxes"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_why_us_boxes" ADD CONSTRAINT "pages_blocks_why_us_boxes_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_card_with_image_background" ADD CONSTRAINT "pages_blocks_card_with_image_background_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_card_with_image_background" ADD CONSTRAINT "pages_blocks_card_with_image_background_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_reviews_reviews" ADD CONSTRAINT "pages_blocks_reviews_reviews_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_reviews"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_reviews" ADD CONSTRAINT "pages_blocks_reviews_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_map_section_areas" ADD CONSTRAINT "pages_blocks_map_section_areas_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_map_section"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_map_section_bullets" ADD CONSTRAINT "pages_blocks_map_section_bullets_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_map_section"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_map_section" ADD CONSTRAINT "pages_blocks_map_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "checklist_image_items" ADD CONSTRAINT "checklist_image_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."checklist_image"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "checklist_image" ADD CONSTRAINT "checklist_image_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "checklist_image" ADD CONSTRAINT "checklist_image_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "simple_card_section_cards" ADD CONSTRAINT "simple_card_section_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."simple_card_section"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "simple_card_section" ADD CONSTRAINT "simple_card_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "steps_section_steps" ADD CONSTRAINT "steps_section_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."steps_section"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "steps_section" ADD CONSTRAINT "steps_section_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "steps_section" ADD CONSTRAINT "steps_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "faq_section_questions" ADD CONSTRAINT "faq_section_questions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."faq_section"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "faq_section" ADD CONSTRAINT "faq_section_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "faq_section" ADD CONSTRAINT "faq_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "location_cards_cards" ADD CONSTRAINT "location_cards_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."location_cards"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "location_cards" ADD CONSTRAINT "location_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "service_areas_list_counties_locations" ADD CONSTRAINT "service_areas_list_counties_locations_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."service_areas_list_counties"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "service_areas_list_counties" ADD CONSTRAINT "service_areas_list_counties_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."service_areas_list"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "service_areas_list" ADD CONSTRAINT "service_areas_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blog_posts_list" ADD CONSTRAINT "blog_posts_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_post_faq_questions" ADD CONSTRAINT "posts_post_faq_questions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts" ADD CONSTRAINT "posts_featured_image_id_media_id_fk" FOREIGN KEY ("featured_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts" ADD CONSTRAINT "posts_post_faq_image_id_media_id_fk" FOREIGN KEY ("post_faq_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_nav_links" ADD CONSTRAINT "header_nav_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header" ADD CONSTRAINT "header_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "footer_offices" ADD CONSTRAINT "footer_offices_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_links" ADD CONSTRAINT "footer_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "users_sessions_order_idx" ON "users_sessions" USING btree ("_order");
  CREATE INDEX "users_sessions_parent_id_idx" ON "users_sessions" USING btree ("_parent_id");
  CREATE INDEX "users_updated_at_idx" ON "users" USING btree ("updated_at");
  CREATE INDEX "users_created_at_idx" ON "users" USING btree ("created_at");
  CREATE UNIQUE INDEX "users_email_idx" ON "users" USING btree ("email");
  CREATE INDEX "media_updated_at_idx" ON "media" USING btree ("updated_at");
  CREATE INDEX "media_created_at_idx" ON "media" USING btree ("created_at");
  CREATE UNIQUE INDEX "media_filename_idx" ON "media" USING btree ("filename");
  CREATE INDEX "pages_blocks_hero_order_idx" ON "pages_blocks_hero" USING btree ("_order");
  CREATE INDEX "pages_blocks_hero_parent_id_idx" ON "pages_blocks_hero" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_hero_path_idx" ON "pages_blocks_hero" USING btree ("_path");
  CREATE INDEX "pages_blocks_hero_image_idx" ON "pages_blocks_hero" USING btree ("image_id");
  CREATE INDEX "services_materials_groups_services_order_idx" ON "services_materials_groups_services" USING btree ("_order");
  CREATE INDEX "services_materials_groups_services_parent_id_idx" ON "services_materials_groups_services" USING btree ("_parent_id");
  CREATE INDEX "services_materials_groups_services_image_idx" ON "services_materials_groups_services" USING btree ("image_id");
  CREATE INDEX "services_materials_groups_order_idx" ON "services_materials_groups" USING btree ("_order");
  CREATE INDEX "services_materials_groups_parent_id_idx" ON "services_materials_groups" USING btree ("_parent_id");
  CREATE INDEX "services_materials_order_idx" ON "services_materials" USING btree ("_order");
  CREATE INDEX "services_materials_parent_id_idx" ON "services_materials" USING btree ("_parent_id");
  CREATE INDEX "services_materials_path_idx" ON "services_materials" USING btree ("_path");
  CREATE INDEX "pages_blocks_why_us_boxes_cards_order_idx" ON "pages_blocks_why_us_boxes_cards" USING btree ("_order");
  CREATE INDEX "pages_blocks_why_us_boxes_cards_parent_id_idx" ON "pages_blocks_why_us_boxes_cards" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_why_us_boxes_order_idx" ON "pages_blocks_why_us_boxes" USING btree ("_order");
  CREATE INDEX "pages_blocks_why_us_boxes_parent_id_idx" ON "pages_blocks_why_us_boxes" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_why_us_boxes_path_idx" ON "pages_blocks_why_us_boxes" USING btree ("_path");
  CREATE INDEX "pages_blocks_card_with_image_background_order_idx" ON "pages_blocks_card_with_image_background" USING btree ("_order");
  CREATE INDEX "pages_blocks_card_with_image_background_parent_id_idx" ON "pages_blocks_card_with_image_background" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_card_with_image_background_path_idx" ON "pages_blocks_card_with_image_background" USING btree ("_path");
  CREATE INDEX "pages_blocks_card_with_image_background_image_idx" ON "pages_blocks_card_with_image_background" USING btree ("image_id");
  CREATE INDEX "pages_blocks_reviews_reviews_order_idx" ON "pages_blocks_reviews_reviews" USING btree ("_order");
  CREATE INDEX "pages_blocks_reviews_reviews_parent_id_idx" ON "pages_blocks_reviews_reviews" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_reviews_order_idx" ON "pages_blocks_reviews" USING btree ("_order");
  CREATE INDEX "pages_blocks_reviews_parent_id_idx" ON "pages_blocks_reviews" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_reviews_path_idx" ON "pages_blocks_reviews" USING btree ("_path");
  CREATE INDEX "pages_blocks_map_section_areas_order_idx" ON "pages_blocks_map_section_areas" USING btree ("_order");
  CREATE INDEX "pages_blocks_map_section_areas_parent_id_idx" ON "pages_blocks_map_section_areas" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_map_section_bullets_order_idx" ON "pages_blocks_map_section_bullets" USING btree ("_order");
  CREATE INDEX "pages_blocks_map_section_bullets_parent_id_idx" ON "pages_blocks_map_section_bullets" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_map_section_order_idx" ON "pages_blocks_map_section" USING btree ("_order");
  CREATE INDEX "pages_blocks_map_section_parent_id_idx" ON "pages_blocks_map_section" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_map_section_path_idx" ON "pages_blocks_map_section" USING btree ("_path");
  CREATE INDEX "checklist_image_items_order_idx" ON "checklist_image_items" USING btree ("_order");
  CREATE INDEX "checklist_image_items_parent_id_idx" ON "checklist_image_items" USING btree ("_parent_id");
  CREATE INDEX "checklist_image_order_idx" ON "checklist_image" USING btree ("_order");
  CREATE INDEX "checklist_image_parent_id_idx" ON "checklist_image" USING btree ("_parent_id");
  CREATE INDEX "checklist_image_path_idx" ON "checklist_image" USING btree ("_path");
  CREATE INDEX "checklist_image_image_idx" ON "checklist_image" USING btree ("image_id");
  CREATE INDEX "simple_card_section_cards_order_idx" ON "simple_card_section_cards" USING btree ("_order");
  CREATE INDEX "simple_card_section_cards_parent_id_idx" ON "simple_card_section_cards" USING btree ("_parent_id");
  CREATE INDEX "simple_card_section_order_idx" ON "simple_card_section" USING btree ("_order");
  CREATE INDEX "simple_card_section_parent_id_idx" ON "simple_card_section" USING btree ("_parent_id");
  CREATE INDEX "simple_card_section_path_idx" ON "simple_card_section" USING btree ("_path");
  CREATE INDEX "steps_section_steps_order_idx" ON "steps_section_steps" USING btree ("_order");
  CREATE INDEX "steps_section_steps_parent_id_idx" ON "steps_section_steps" USING btree ("_parent_id");
  CREATE INDEX "steps_section_order_idx" ON "steps_section" USING btree ("_order");
  CREATE INDEX "steps_section_parent_id_idx" ON "steps_section" USING btree ("_parent_id");
  CREATE INDEX "steps_section_path_idx" ON "steps_section" USING btree ("_path");
  CREATE INDEX "steps_section_image_idx" ON "steps_section" USING btree ("image_id");
  CREATE INDEX "faq_section_questions_order_idx" ON "faq_section_questions" USING btree ("_order");
  CREATE INDEX "faq_section_questions_parent_id_idx" ON "faq_section_questions" USING btree ("_parent_id");
  CREATE INDEX "faq_section_order_idx" ON "faq_section" USING btree ("_order");
  CREATE INDEX "faq_section_parent_id_idx" ON "faq_section" USING btree ("_parent_id");
  CREATE INDEX "faq_section_path_idx" ON "faq_section" USING btree ("_path");
  CREATE INDEX "faq_section_image_idx" ON "faq_section" USING btree ("image_id");
  CREATE INDEX "location_cards_cards_order_idx" ON "location_cards_cards" USING btree ("_order");
  CREATE INDEX "location_cards_cards_parent_id_idx" ON "location_cards_cards" USING btree ("_parent_id");
  CREATE INDEX "location_cards_order_idx" ON "location_cards" USING btree ("_order");
  CREATE INDEX "location_cards_parent_id_idx" ON "location_cards" USING btree ("_parent_id");
  CREATE INDEX "location_cards_path_idx" ON "location_cards" USING btree ("_path");
  CREATE INDEX "service_areas_list_counties_locations_order_idx" ON "service_areas_list_counties_locations" USING btree ("_order");
  CREATE INDEX "service_areas_list_counties_locations_parent_id_idx" ON "service_areas_list_counties_locations" USING btree ("_parent_id");
  CREATE INDEX "service_areas_list_counties_order_idx" ON "service_areas_list_counties" USING btree ("_order");
  CREATE INDEX "service_areas_list_counties_parent_id_idx" ON "service_areas_list_counties" USING btree ("_parent_id");
  CREATE INDEX "service_areas_list_order_idx" ON "service_areas_list" USING btree ("_order");
  CREATE INDEX "service_areas_list_parent_id_idx" ON "service_areas_list" USING btree ("_parent_id");
  CREATE INDEX "service_areas_list_path_idx" ON "service_areas_list" USING btree ("_path");
  CREATE INDEX "blog_posts_list_order_idx" ON "blog_posts_list" USING btree ("_order");
  CREATE INDEX "blog_posts_list_parent_id_idx" ON "blog_posts_list" USING btree ("_parent_id");
  CREATE INDEX "blog_posts_list_path_idx" ON "blog_posts_list" USING btree ("_path");
  CREATE UNIQUE INDEX "pages_slug_idx" ON "pages" USING btree ("slug");
  CREATE INDEX "pages_updated_at_idx" ON "pages" USING btree ("updated_at");
  CREATE INDEX "pages_created_at_idx" ON "pages" USING btree ("created_at");
  CREATE INDEX "posts_post_faq_questions_order_idx" ON "posts_post_faq_questions" USING btree ("_order");
  CREATE INDEX "posts_post_faq_questions_parent_id_idx" ON "posts_post_faq_questions" USING btree ("_parent_id");
  CREATE INDEX "posts_featured_image_idx" ON "posts" USING btree ("featured_image_id");
  CREATE INDEX "posts_post_faq_post_faq_image_idx" ON "posts" USING btree ("post_faq_image_id");
  CREATE INDEX "posts_updated_at_idx" ON "posts" USING btree ("updated_at");
  CREATE INDEX "posts_created_at_idx" ON "posts" USING btree ("created_at");
  CREATE UNIQUE INDEX "payload_kv_key_idx" ON "payload_kv" USING btree ("key");
  CREATE INDEX "payload_locked_documents_global_slug_idx" ON "payload_locked_documents" USING btree ("global_slug");
  CREATE INDEX "payload_locked_documents_updated_at_idx" ON "payload_locked_documents" USING btree ("updated_at");
  CREATE INDEX "payload_locked_documents_created_at_idx" ON "payload_locked_documents" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_rels_order_idx" ON "payload_locked_documents_rels" USING btree ("order");
  CREATE INDEX "payload_locked_documents_rels_parent_idx" ON "payload_locked_documents_rels" USING btree ("parent_id");
  CREATE INDEX "payload_locked_documents_rels_path_idx" ON "payload_locked_documents_rels" USING btree ("path");
  CREATE INDEX "payload_locked_documents_rels_users_id_idx" ON "payload_locked_documents_rels" USING btree ("users_id");
  CREATE INDEX "payload_locked_documents_rels_media_id_idx" ON "payload_locked_documents_rels" USING btree ("media_id");
  CREATE INDEX "payload_locked_documents_rels_pages_id_idx" ON "payload_locked_documents_rels" USING btree ("pages_id");
  CREATE INDEX "payload_locked_documents_rels_posts_id_idx" ON "payload_locked_documents_rels" USING btree ("posts_id");
  CREATE INDEX "payload_preferences_key_idx" ON "payload_preferences" USING btree ("key");
  CREATE INDEX "payload_preferences_updated_at_idx" ON "payload_preferences" USING btree ("updated_at");
  CREATE INDEX "payload_preferences_created_at_idx" ON "payload_preferences" USING btree ("created_at");
  CREATE INDEX "payload_preferences_rels_order_idx" ON "payload_preferences_rels" USING btree ("order");
  CREATE INDEX "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX "payload_preferences_rels_path_idx" ON "payload_preferences_rels" USING btree ("path");
  CREATE INDEX "payload_preferences_rels_users_id_idx" ON "payload_preferences_rels" USING btree ("users_id");
  CREATE INDEX "payload_migrations_updated_at_idx" ON "payload_migrations" USING btree ("updated_at");
  CREATE INDEX "payload_migrations_created_at_idx" ON "payload_migrations" USING btree ("created_at");
  CREATE INDEX "header_nav_links_order_idx" ON "header_nav_links" USING btree ("_order");
  CREATE INDEX "header_nav_links_parent_id_idx" ON "header_nav_links" USING btree ("_parent_id");
  CREATE INDEX "header_logo_idx" ON "header" USING btree ("logo_id");
  CREATE INDEX "footer_offices_order_idx" ON "footer_offices" USING btree ("_order");
  CREATE INDEX "footer_offices_parent_id_idx" ON "footer_offices" USING btree ("_parent_id");
  CREATE INDEX "footer_links_order_idx" ON "footer_links" USING btree ("_order");
  CREATE INDEX "footer_links_parent_id_idx" ON "footer_links" USING btree ("_parent_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "users_sessions" CASCADE;
  DROP TABLE "users" CASCADE;
  DROP TABLE "media" CASCADE;
  DROP TABLE "pages_blocks_hero" CASCADE;
  DROP TABLE "services_materials_groups_services" CASCADE;
  DROP TABLE "services_materials_groups" CASCADE;
  DROP TABLE "services_materials" CASCADE;
  DROP TABLE "pages_blocks_why_us_boxes_cards" CASCADE;
  DROP TABLE "pages_blocks_why_us_boxes" CASCADE;
  DROP TABLE "pages_blocks_card_with_image_background" CASCADE;
  DROP TABLE "pages_blocks_reviews_reviews" CASCADE;
  DROP TABLE "pages_blocks_reviews" CASCADE;
  DROP TABLE "pages_blocks_map_section_areas" CASCADE;
  DROP TABLE "pages_blocks_map_section_bullets" CASCADE;
  DROP TABLE "pages_blocks_map_section" CASCADE;
  DROP TABLE "checklist_image_items" CASCADE;
  DROP TABLE "checklist_image" CASCADE;
  DROP TABLE "simple_card_section_cards" CASCADE;
  DROP TABLE "simple_card_section" CASCADE;
  DROP TABLE "steps_section_steps" CASCADE;
  DROP TABLE "steps_section" CASCADE;
  DROP TABLE "faq_section_questions" CASCADE;
  DROP TABLE "faq_section" CASCADE;
  DROP TABLE "location_cards_cards" CASCADE;
  DROP TABLE "location_cards" CASCADE;
  DROP TABLE "service_areas_list_counties_locations" CASCADE;
  DROP TABLE "service_areas_list_counties" CASCADE;
  DROP TABLE "service_areas_list" CASCADE;
  DROP TABLE "blog_posts_list" CASCADE;
  DROP TABLE "pages" CASCADE;
  DROP TABLE "posts_post_faq_questions" CASCADE;
  DROP TABLE "posts" CASCADE;
  DROP TABLE "payload_kv" CASCADE;
  DROP TABLE "payload_locked_documents" CASCADE;
  DROP TABLE "payload_locked_documents_rels" CASCADE;
  DROP TABLE "payload_preferences" CASCADE;
  DROP TABLE "payload_preferences_rels" CASCADE;
  DROP TABLE "payload_migrations" CASCADE;
  DROP TABLE "header_nav_links" CASCADE;
  DROP TABLE "header" CASCADE;
  DROP TABLE "footer_offices" CASCADE;
  DROP TABLE "footer_links" CASCADE;
  DROP TABLE "footer" CASCADE;
  DROP TYPE "public"."enum_services_materials_groups_services_icon";
  DROP TYPE "public"."enum_pages_blocks_why_us_boxes_cards_icon";
  DROP TYPE "public"."enum_pages_blocks_map_section_variant";
  DROP TYPE "public"."enum_simple_card_section_cards_icon";
  DROP TYPE "public"."enum_steps_section_variant";
  DROP TYPE "public"."enum_posts_category";`)
}
