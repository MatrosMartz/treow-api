import { UserEntity, UserKind } from '$user/domain'

declare namespace UseCase {
	type Create = (props: unknown) => Promise<UserEntity>
	type getUserKind = (email: string) => Promise<UserKind>
}

declare class UserUseCase {
	create: UseCase.Create
	getUserKind: UseCase.getUserKind
}

export { UserUseCase }
