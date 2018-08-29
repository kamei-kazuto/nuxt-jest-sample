const frisby = require('frisby');
const Joi = frisby.Joi; // Frisby exposes Joi for convenience

let qiitaItems

it('Qiitaアイテム一覧のテスト', () => {
  frisby.get('https://qiita.com/api/v2/items')
    .expect('status', 200)
    .expect('jsonTypes', '*', {
      rendered_body: Joi.string(),
      body: Joi.string(),
      coediting: Joi.boolean(),
      comments_count: Joi.number().integer(),
      created_at: Joi.string(),
      group: Joi.object().allow(null),
      id: Joi.string(),
      likes_count: Joi.number().integer(),
      private: Joi.boolean(),
      reactions_count: Joi.number().integer(),
      tags: Joi.array(),
      title: Joi.string(),
      updated_at: Joi.string(),
      url: Joi.string(),
      user: Joi.object().keys({
        id: Joi.string(),
        name: Joi.string().allow(''),
        profile_image_url: Joi.string(),
        description: Joi.string(),
        facebook_id: Joi.string(),
        followees_count: Joi.number().integer(),
        followers_count: Joi.number().integer(),
        github_login_name: Joi.string(),
        items_count: Joi.number().integer(),
        linkedin_id: Joi.string(),
        location: Joi.string(),
        organization: Joi.string(),
        permanent_id: Joi.string(),
        twitter_screen_name: Joi.string(),
        website_url: Joi.string(),
      }),
      page_views_count: Joi.number().integer().allow(null),
    })
})

it('Qiitaユーザー詳細情報API', async () => {
  const qiitaItems = await frisby.get('https://qiita.com/api/v2/items')
  const userId = qiitaItems[0].user.id
  frisby.get('https://qiita.com/api/v2/users/' + userId )
    .expect('status', 200)
    // .expect('json', '*', {
    //   postId: postId
    // })
    .expect('jsonTypes', '*', {
      id: Joi.string(),
      name: Joi.string().allow(''),
      profile_image_url: Joi.string(),
      description: Joi.string(),
      facebook_id: Joi.string(),
      followees_count: Joi.number().integer(),
      followers_count: Joi.number().integer(),
      github_login_name: Joi.string(),
      items_count: Joi.number().integer(),
      linkedin_id: Joi.string(),
      location: Joi.string(),
      organization: Joi.string(),
      permanent_id: Joi.string(),
      twitter_screen_name: Joi.string(),
      website_url: Joi.string(),
    })
})
