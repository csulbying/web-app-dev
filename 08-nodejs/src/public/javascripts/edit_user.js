$(() => $("#updateButton").click(updateUser));

function updateUser() {
  const url = window.location.pathname;
  const userId = url.substring(url.lastIndexOf("/") + 1);
  console.log(userId);
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
    type: "put",
    contentType: "application/json",
    dataType: "json",
    data: JSON.stringify(user)
  });

  request.done(data => console.log(data));
  request.fail(function(jqXHR, textStatus, errorThrown) {
    console.log(jqXHR, textStatus, errorThrown);
  });
}
