$(() => $("#createButton").click(createUser));

function createUser() {
  const salaryVal = $("input[name=salary]")
    .val()
    .trim();
  const salary = parseInt(salaryVal, 10);

  const user = {
    name: $("input[name=name]")
      .val()
      .trim(),
    address: $("textarea[name=address]")
      .val()
      .trim(),
    position: $("input[name=position]")
      .val()
      .trim(),
    salary
  };

  const request = $.ajax({
    type: "post",
    contentType: "application/json",
    dataType: "json",
    data: JSON.stringify(user)
  });

  request.done(function(data) {
    console.log("creation done", data);
  });

  request.fail(function(jqXHR, textStatus, errorThrown) {
    console.log(jqXHR, textStatus, errorThrown);
  });
}
