import request from "@fewlines-education/request";
import "dotenv/config";

function createPost(title: string, author: string): void {
  request(
    `http://${process.env.HOST}/posts`,
    {
      method: "POST",
      body: JSON.stringify({ title: `${title}`, author: `${author}` }),
      headers: { "Content-Type": "application/json" },
    },

    (error, html, response) => {
      if (error) {
        console.error(error);
      } else {
        console.log(response);

        const json = JSON.parse(html);
        console.log(json);
      }
    },
  );
}
createPost("Yooooo", "Freud");

export { createPost };
