const userList = [
    {
        id: 0,
        name: 'Ilya',
    },
    {
        id:1,
        name: 'Golden Garr'
    }
]

export const userService = () => {
    const getUser = (userId: number) => {
        return userList.find(user => user.id === userId)
    }

    const getUserList = () => {
        return userList
    }

    return {
        getUser,
        getUserList
    }
}