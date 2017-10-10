let initialState = {
    bankName: '中国银行',
    bankNo: '145*********352',
    accountBalance: 2354,
    exchangeRate: 0.346435,
    inGoldBanks: [
        {
            key: 1,
            label: '中国银行'
        },
        {
            key: 2,
            label: '工商银行'
        },{
            key: 3,
            label: '建设银行'
        },{
            key: 4,
            label: '农业银行'
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

