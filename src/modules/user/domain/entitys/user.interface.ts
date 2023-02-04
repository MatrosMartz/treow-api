enum UserType {
	MOD = 'mod',
	ADMIN = 'admin',
	USER = 'user',
}

interface UserInterface {
	id: string
	name: string
	email: string
	type: UserType
}

export { UserInterface, UserType }
