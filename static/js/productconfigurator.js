function gatherConfiguratorInformation(){var configuration=[];return jQuery(".productconfigurator").children().each(function(){var option={},$option=jQuery(this);switch(option.title=$option.data("option"),$option.data("type")){case 1:var selectedValues="";jQuery(".productconfigurator--option__select option:selected",$option).each(function(){selectedValues+=jQuery(this).text()+"; "}),option.value=selectedValues;break;case 2:option.value=1==jQuery(".check",$option)[0].checked?"gewählt":"nicht gewählt";break;case 3:option.value=jQuery(".productconfigurator--option__static").text().trim()}configuration.push(option)}),configuration}function updateConfiguratorBasedOnSelectedVersion(version){""==version?jQuery(".productconfigurator--option:not(.identifier)").each(function(){jQuery(this).addClass("disabled"),jQuery('form[id^="configurator"] button[type="submit"]').attr("disabled","disabled")}):jQuery(".productconfigurator--option").each(function(){if(void 0!==jQuery(".check",this).data("userselectable")&&(jQuery(".check",this).data("userselectable").includes(version)||(jQuery(".check",this).attr("disabled","disabled"),jQuery(this).addClass("disabled"))),void 0!==jQuery(".check",this).data("preselect")&&(""+jQuery(".check",this).data("preselect")).includes(version)&&jQuery(".check",this).prop("checked","true"),jQuery(".productconfigurator--option__select",this).length>0){var $select=jQuery(".productconfigurator--option__select",this);jQuery("option",$select).each(function(){void 0!==jQuery(this).data("preselect")&&(""+jQuery(this).data("preselect")).includes(version)&&jQuery(this).attr("selected","selected")})}})}function resetDisplayMode(){jQuery(".productconfigurator--option").each(function(){jQuery(".check",this).removeAttr("disabled"),jQuery("select",this).removeAttr("disabled"),jQuery(".check",this).prop("checked",!1),jQuery(this).removeClass("disabled"),jQuery('form[id^="configurator"] button[type="submit"]').removeAttr("disabled"),jQuery(".productconfigurator--option__select option").removeAttr("selected")})}function updateForm(){var submitOptions="";gatherConfiguratorInformation().forEach(function(option){void 0===option.value&&(option.value=""),submitOptions+=option.title+":\r\n"+option.value+"\r\n-----------------------\r\n"}),jQuery('input[id$="configuration"]').val(submitOptions)}jQuery(document).ready(function(){jQuery(".productconfigurator--option__description-default").on("click",function(){jQuery(this).next(".productconfigurator--option__tooltip").fadeIn(150)}),jQuery(".productconfigurator--option__tooltip-close").on("click",function(){jQuery(this).parent().fadeOut(150)}),jQuery(".version-select").on("change",function(){var $this=jQuery(this);resetDisplayMode(),updateConfiguratorBasedOnSelectedVersion($this.val()),jQuery(".productconfigurator--option__title-placeholder").text(jQuery(".version-select option:selected").text())}),jQuery('form[id^="configurator"] button[type="submit"]').attr("disabled","disabled"),jQuery('form[id^="configurator"] textarea').attr("rows","9"),jQuery('form[id^="configurator"] input[name*="roboter"]').val(jQuery(".productconfigurator--option.identifier .productconfigurator--option__title").text().trim()),jQuery(".productconfigurator input,.productconfigurator select").on("change",function(){updateForm()})});