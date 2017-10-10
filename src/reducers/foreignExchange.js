let initialState = {
    bankName: '中国银行',
    bankNo: '145*********352',
    accountBalance: 2354,
    exchangeRate: 0.346435,
    inGoldBanks: [
        {
            key: 1,
            name: '中国银行'
        },
        {
            key: 2,
            name: '工商银行'
        },{
            key: 3,
            name: '建设银行'
        },{
            key: 4,
            name: '农业银行'
        }
    ]
}

export default function foreignExchange(state = initialState, action = {}) {

    switch (action.type) {

        case 'outGold':
            return Object.assign({}, state, {
                show: true
            })

        case 'inGold':
            return Object.assign({}, state, {
                show: false
            })

        default:
            return state
    }

}

