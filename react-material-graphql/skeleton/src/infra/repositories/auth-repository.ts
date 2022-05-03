import { FederatedSignInDTO, SignInDTO } from "@/data/dto";
import { FederatedSignInRepository, SignInRepository } from "@/data/protocols";

export class AuthRepository
  implements SignInRepository, FederatedSignInRepository
{
  async federatedSignIn(params: FederatedSignInDTO): Promise<string> {
    return Promise.resolve("");
  }

  async signIn(params: SignInDTO): Promise<string> {
    return Promise.resolve("");
  }
}
