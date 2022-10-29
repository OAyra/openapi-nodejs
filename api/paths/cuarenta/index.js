module.exports = function () {
  let operations = {
    GET
  };

  function GET(req, res, next) {
    console.log(`todo: ${JSON.stringify(req.body)}`);

    setTimeout(function() {
      res.status(200).json([
        { id: 0, message: "Demoro cuarenta segundos" },
        { id: 1, message: "Demoro cuarenta segundos" },
      ]);
    }, 40000);

  }

  GET.apiDoc = {
    summary: "Fetch cuarenta.",
    operationId: "getCuarenta",
    responses: {
      200: {
        description: "List of cuarenta.",
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
