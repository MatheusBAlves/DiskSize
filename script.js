main()

function main() {

    let tamanhoFornecido = 900000000
    let tamanhoReal

    if (tamanhoFornecido >= 1180591620717411303424000)
        tamanhoReal = (tamanhoFornecido / 1208925819614629199872000).toFixed(2) + " YB";

    else if (tamanhoFornecido >= 1152921504606846976000)
        tamanhoReal = (tamanhoFornecido / 1180591620717411328000).toFixed(2) + " ZB";

    else if (tamanhoFornecido >= 1125899906842624000)
        tamanhoReal = (tamanhoFornecido / 1152921504606847000).toFixed(2) + " EB";

    else if (tamanhoFornecido >= 1099511627776000)
        tamanhoReal = (tamanhoFornecido / 1125899906842624).toFixed(2) + " PB";

    else if (tamanhoFornecido >= 1073741824000)
        tamanhoReal = (tamanhoFornecido / 1099511627776).toFixed(2) + " TB";

    else if (tamanhoFornecido >= 1048576000)
        tamanhoReal = (tamanhoFornecido / 1073741824).toFixed(2) + " GB";

    else if (tamanhoFornecido >= 1024000)
        tamanhoReal = (tamanhoFornecido / 1048576).toFixed(2) + " MB";

    else if (tamanhoFornecido >= 1001)
        tamanhoReal = (tamanhoFornecido / 1024).toFixed(2) + " KB";

    else if (tamanhoFornecido <= 1000)
        tamanhoReal = tamanhoFornecido.toFixed(2) + " B";


    console.log(`Tamanho Retornado: ${tamanhoReal}`)


}

