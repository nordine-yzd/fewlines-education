import request from "@fewlines-education/request";
import "dotenv/config";

function deletePost(numero: number) {
  request(
    `http://${process.env.HOST}/posts/${numero}`,
    {
      method: "DELETE",
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

deletePost(2);

export { deletePost };
