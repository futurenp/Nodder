export interface ModrinthData {
  slug: string;
  title: string;
  description: string;
  categories: string[];
  client_side: string;
  server_side: string;
  body: string;
  status?: string;
  requested_status: string;
  additional_categories?: string[];
  issues_url?: string;
  source_url?: string;
  wiki_url?: string;
  discord_url?: string;
  donation_url?: object[];
  license_id: string;
  project_type: string;
  initial_versions: object[]; //deprecated
  is_draft?: boolean;
  gallery_items?: object[];
  icon?: string;
}
