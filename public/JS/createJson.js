const createJson = () => {
    //inicializa as variaveis para comparacoes posteriores
    var isCaptcha = -1;
    var isCookies = -1;
    var isLinksAtPageBottom = -1;
    var isFeatureList = -1;
    var isLanguageList = -1;
    var isAppList = -1;
    var isQa = -1;
    var accessError = -1;
    var isOthers = -1;
    var otherType;

    // verifica quais opcoes estao marcadas
    document.getElementById('captcha').checked ? isCaptcha = 1 : isCaptcha = 0;
    document.getElementById('cookies').checked ? isCookies = 1 : isCookies = 0;
    document.getElementById('linksAtPageBottom').checked ? isLinksAtPageBottom = 1 : isLinksAtPageBottom = 0;
    document.getElementById('featureList').checked ? isFeatureList = 1 : isFeatureList = 0;
    document.getElementById('languageList').checked ? isLanguageList = 1 : isLanguageList = 0;
    document.getElementById('appList').checked ? isAppList = 1 : isAppList = 0;
    document.getElementById('qa').checked ? isQa = 1 : isQa = 0;
    document.getElementById('accessError').checked ? accessError = 1 : accessError = 0;


    // verifica se eh politica ou nao
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

    // verifica se a nao politica eh determinada
    document.getElementById('others').checked ? isOthers = 1 : isOthers = 0;

    if (isOthers == 1) {
        otherType = document.getElementById('others-text').value;
    }
    else if (isOthers == 0) {
        otherType = " "
    }

    // coleta as informacoes de dentro dos campos
    var title = document.getElementById('app-title').innerHTML;
    var lang = document.getElementById('app-lang').innerHTML;
    var content = document.getElementById('app-body').innerHTML;
    var index = document.getElementById('id').innerHTML;
    var obs = document.getElementById('obs').value;

    // cria cada posicao do json
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
        'isQa': isQa,
        'accessError' : accessError,
        'isOther' : isOthers,
        'otherType' : otherType,
        'obs' : obs
    }

    // insere cada posicao em sua respectiva posicao original
    arrayGlobal.splice(index, 1, obj);
    console.log(arrayGlobal);
}