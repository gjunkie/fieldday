async function fetchAPI(query, { variables, preview } = {}) {
  const res = await fetch(process.env.GRAPHCMS_PROJECT_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${
        preview
          ? process.env.GRAPHCMS_DEV_AUTH_TOKEN
          : process.env.GRAPHCMS_PROD_AUTH_TOKEN
      }`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  })
  const json = await res.json()

  if (json.errors) {
    console.log(json.errors)
    throw new Error('Failed to fetch API')
  }

  return json.data
}

export async function getVideos() {
  const data = await fetchAPI(
    `
    query VideoQuery {
      videos {
        brand
        title
        slug
        id
        director
        editor
        agency
        soundDesigner
        videoFile {
          url
          fileName
          id
        }
        poster {
          url
          fileName
        }
        posterPlaceholder {
          url
          fileName
        }
        videoLink
        featureAsSoundDesign
        featureAsMix
        positionSoundDesign
        positionMix
      }
    }
  `)
  return data.videos
    .filter(video => video.featureAsMix)
    .sort((a, b) => a.positionMix - b.positionMix);
}
