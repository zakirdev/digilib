function backup(){window.open(url_backup)}function modalRestore(){$(".modal").load(url_restore,function(){$(".modal").modal("show")})}function restore(){$(".form-restore").ajaxSubmit({success:function(e){if(e.sql){$("#control-sql").removeClass("info").addClass("error");$("#error-sql").text(e.sql)}else{$(".modal").modal("hide");$(".modal").html("");notif("Database berhasil direstore.","info");redirect()}}})}function redirect(){setTimeout(function(){$(location).prop("href",url_home)},3e3)}