module.exports = function () {
  let operations = {
    GET
  };

  function GET(req, res, next) {
    console.log(`todo: ${JSON.stringify(req.body)}`);

    setTimeout(function() {
      res.status(200).json([
        { id: 0, message: "Demoro trescientos cincuenta segundos" },
        { id: 1, message: "Demoro trescientos cincuenta segundos" },
      ]);
    }, 350000);

  }

  GET.apiDoc = {
    summary: "Fetch trescientos cincuenta.",
    operationId: "getVeinte",
    responses: {
      200: {
        description: "List of trescientos cincuenta.",
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
