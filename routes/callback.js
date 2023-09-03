const hubspot = require('@hubspot/api-client');
const hubspotClient = new hubspot.Client();

module.exports = async (req, res) => {
  console.log('OAuth callback for app initiation');
  const code = req.query.code;

  const getTokensResponse = await hubspotClient.oauth.tokensApi.create(
    'authorization_code',
    code,
    `${process.env.APP_BASE_URL}/callback`,
    'bc958072-2967-43eb-9d86-bc8b0443fb18',
    '96e942ef-9f63-4cf6-b4ac-17bdf6d6422a'
  );

  console.log('Retrieving access token result:', getTokensResponse);

  tokenStore = getTokensResponse;
  tokenStore.updatedAt = Date.now();

  hubspotClient.setAccessToken(tokenStore.accessToken);

  res.redirect('/success');
}
