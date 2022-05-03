import { FederatedSignInDTO, SignInDTO } from "@/data/dto";

export interface SignIn {
  perform(params: SignInDTO): Promise<string>;
}

export interface FederatedSignIn {
  perform(params: FederatedSignInDTO): Promise<string>;
}

export interface SignInRepository {
  signIn(params: SignInDTO): Promise<string>;
}

export interface FederatedSignInRepository {
  federatedSignIn(params: FederatedSignInDTO): Promise<string>;
}
