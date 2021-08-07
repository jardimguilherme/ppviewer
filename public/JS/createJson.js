const createJson = () => {
    var isCaptcha = -1;
    var isCookies = -1;
    var isLinksAtPageBottom = -1;
    var isFeatureList = -1;
    var isLanguageList = -1;
    var isAppList = -1;
    var isQa = -1;

    document.getElementById('captcha').checked ? isCaptcha = 1 : isCaptcha = 0;
    document.getElementById('cookies').checked ? isCookies = 1 : isCookies = 0;
    document.getElementById('linksAtPageBottom').checked ? isLinksAtPageBottom = 1 : isLinksAtPageBottom = 0;
    document.getElementById('featureList').checked ? isFeatureList = 1 : isFeatureList = 0;
    document.getElementById('languageList').checked ? isLanguageList = 1 : isLanguageList = 0;
    document.getElementById('appList').checked ? isAppList = 1 : isAppList = 0;
    document.getElementById('qa').checked ? isQa = 1 : isQa = 0;

    var isPolicy = document.getElementById("isPolicy-input").checked;
    var isntPolicy = document.getElementById("isntPolicy-input").checked;

    if (isPolicy == true && isntPolicy == false) {
        policy = 1;
    }
    else if (isPolicy == false && isntPolicy == true) {
        policy = 0;
    }
    else if (isPolicy == false && isntPolicy == false) {
        policy = -1;
    }

    var title = document.getElementById('app-title').innerHTML;
    var lang = document.getElementById('app-lang').innerHTML;
    var content = document.getElementById('app-body').innerHTML;
    var index = document.getElementById('id').innerHTML;

    var obj = {
        'Title': title,
        'Lang': lang,
        'Content': content,
        'isPolicy': policy,
        'isCaptcha': isCaptcha,
        'isCookies': isCookies,
        'isLinksAtPageBottom': isLinksAtPageBottom,
        'isFeatureList': isFeatureList,
        'isLanguageList': isLanguageList,
        'isAppList': isAppList,
        'isQa': isQa
    }

    // arrayGlobal.push(obj);
    arrayGlobal.splice(index, 1, obj);
    console.log(arrayGlobal);
}