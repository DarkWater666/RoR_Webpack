module Front
  class ErrorPages < Aggregates
    VALUES = {
      unprocessable_entity: 422,
      server_error: 500,
      bad_gateway: 502,
      not_found: 404
    }.freeze
  end
end
