# CodeJournal
Virtual library with all blog and linkedin content.

## Structure 
All posts are inside the `posts` folder, each post follows the structure below: 

| **Name**              | **Description**                     |
|-----------------------|-------------------------------------|
| linkedin.md           | Content of the linkedin publication |
| blog.md               | Content of the blog publication     |
| seo-configuration.txt | SEO & URL configuration             |

Each post is also stored inside a folder, with the date of when it was published. The date follows the pattern below:

"dd-mm-yy"

## UTM
The `Urchin Traffic Monitor` is utilized by Google Ads and LinkLabs to identify traffic and build statistics.

You can use the site below to create URLs with the UTM tags.

[Campaign URL Builder](https://ga-dev-tools.web.app/campaign-url-builder)

### Tags

| **Tag**      | **Description**                             |
|--------------|---------------------------------------------|
| utm_id       | <campaign id>                               |
| utm_source   | which website brought the audience          |
| utm_medium   | medium which brought the audience (post etc)|
| utm_campaign | ad campaign name                            |
| utm_term     | keywords used inside `utm_medium`           |

## Creating a new post
Utilize our API to generate new posts programmatically.

🚧 In progress 🚧
