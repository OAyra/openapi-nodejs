module.exports = function () {
  let operations = {
    GET
  };

  function GET(req, res, next) {
    console.log(`todo: ${JSON.stringify(req.body)}`);

    setTimeout(function() {
      res.status(200).json([
        { id: 0, message: "Demoro diez segundos" },
        { id: 1, message: "Demoro diez segundos" },
      ]);
    }, 10000);

  }

  GET.apiDoc = {
    summary: "Fetch diez.",
    operationId: "getDiez",
    responses: {
      200: {
        description: "List of diez.",
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
