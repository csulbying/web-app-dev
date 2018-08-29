$(clickHandler);

function clickHandler() {
  $(".deleteButton").click(function() {
    const uid = $(this).attr("data-uid");
    console.log("delete: ", uid);
    deleteUser(uid);
  });
}

function deleteUser(uid) {
  const request = $.ajax({
    url: `/users/user/${uid}`,
    type: "delete",
    success: function(data) {
      console.log("delete done", data);
      window.location.reload();
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log("error happend");
      console.log(jqXHR, textStatus, errorThrown);
    }
  });
}
