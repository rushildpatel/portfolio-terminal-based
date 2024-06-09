export async function GET(request) {
  const contactMediums = [
    {
      medium: "github",
      username: "rushildpatel",
      link: "https://github.com/rushildpatel",
    },
    {
      medium: "linkedIN",
      username: "rushilpatel07",
      link: "https://www.linkedin.com/in/rushilpatel07/",
    },
    {
      medium: "email",
      username: "rushildineshpatel2000@gmail.com",
      link: "mailto:rushildineshpatel2000@gmail.com",
    },
    {
      medium: "instagram",
      username: "rushil______",
      link: "https://www.instagram.com/rushil______/",
    },
  ];

  return Response.json(contactMediums, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}
