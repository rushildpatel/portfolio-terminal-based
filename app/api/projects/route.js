export async function GET(request) {
  const projects = [
    {
      name: "Project xyz",
      description: "asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasasdasdasdasdasdasdasdasdasdasdasdasdasdasd",
      stack: ["cpp", "react", "JS"],
      link: "https://github.com/rushildpatel",
      image: "xyz.png",
    },
    {
      name: "Project xyz",
      description: "asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasasdasdasdasdasdasdasdasdasdasdasdasdasdasd",
      stack: ["cpp", "react", "JS"],
      link: "https://github.com/rushildpatel",
      image: "xyz.png",
    },
  ];

  return Response.json(projects, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}
