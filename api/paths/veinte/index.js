module.exports = function () {
  let operations = {
    GET
  };

  function GET(req, res, next) {
    console.log(`todo: ${JSON.stringify(req.body)}`);

    setTimeout(function() {
      res.status(200).json([
        { id: 0, message: "Demoro veinte segundos" },
        { id: 1, message: "Demoro veinte segundos" },
      ]);
    }, 20000);

  }

  GET.apiDoc = {
    summary: "Fetch todos.",
    operationId: "getTodos",
    responses: {
      200: {
        description: "List of todos.",
        schema: {
          type: "array",
          items: {
            $ref: "#/definitions/Todo",
          },
        },
      },
    },
  };

  return operations;
};
