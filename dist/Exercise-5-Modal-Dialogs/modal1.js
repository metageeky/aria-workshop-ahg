function showModal(){$("#modal").show(),$("#modal-overlay").show(),$("#close").focus(),$("#modal button").on("keydown",function(e){9===e.which&&(e.preventDefault(),"ok"===$(this).attr("id")?$("#close").focus():$("#ok").focus())})}function hideModal(){$("#modal").hide(),$("#modal-overlay").hide()}$(document).ready(function(){$("#text-control").on("click",function(){$("#supplemental-text").slideToggle("fast"),"true"===$(this).attr("aria-expanded")?$(this).attr("aria-expanded","false").html("Show more"):$(this).attr("aria-expanded","true").html("Show less")}),$("#submit").on("click",function(e){if(e.preventDefault(),$("#name").val())if($("#question").val()){var o=$("#name").val();$("#participant").text(o),$("#has-have").text("has"),showModal()}else $("#error").text("Please answer the question!").show(),$("#question").focus();else $("#error").text("Please enter your name").show(),$("#name").focus();$("#ok, #close").on("click",function(){hideModal()})})});