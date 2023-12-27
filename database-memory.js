import { randomUUID } from "node:crypto"

export class DatabaseMemory {
    // Informação com # será vista apenas por dentro da classe
    #videos = new Map()

    // ESTRUTURA DE DADO
    // SET -> UM ARRAY QUE NÃO ACEITA VALORES DUPLICADOS
    // NÃO FUNCIONA METODOS NORMAIS, EXEMPLO: PARA ADICIONAR VALORES NESSE TIPO DE ARRAY É NECESSÁRIO METODO .SET AO INVES DE .PUSH
    // MAP -> OBJETO COM PARTICULARIDADES - EXEMPLO: TRABALHA DE MANEIRA DIFERENTE SUA MANIPULAÇÃO

    list(search) {
        return Array.from(this.#videos.entries())
        .map((videoArray) => {
            const id = videoArray[0];
            const data = videoArray[1]
            
            return {
                id,
                ...data
            }
        })
        .filter(video => {
            if (search) {
                return video.title.includes(search)
            }
            return true
        })
    }

    create(video) {
        const videoId = randomUUID()

        // UUID: UNIQUE UNIVERSAL ID

        this.#videos.set(videoId, video)
    }

    update(id, video) {
        this.#videos.set(id, video)
    }

    delete(id) {
        this.#videos.delete(id)
    }
}