import { ApolloClient, gql } from "@apollo/client";

import { Http } from "@/infra/protocols";
import { createApolloClient } from "@/infra/http/graphql/client";

export class Graphql implements Http {
  client!: ApolloClient<any>;

  constructor(httpUrl: string, wsUrl: string) {
    this.client = createApolloClient(httpUrl, wsUrl);
  }

  async create<T = any>(resource: string, data?: Record<any, any>): Promise<T> {
    const mutation = gql`
      ${resource}
    `;

    const response = await this.client.mutate<T>({
      mutation,
      ...(data ? { variables: data } : {}),
    });

    return response!.data as T;
  }

  async read<T = any>(resource: string, data?: Record<any, any>): Promise<T> {
    const query = gql`
      ${resource}
    `;

    const response = await this.client.query<T>({
      query,
      ...(data ? { variables: data } : {}),
    });

    return response.data;
  }

  async delete<T = any>(resource: string, data?: Record<any, any>): Promise<T> {
    return this.create(resource, data);
  }

  async update<T = any>(resource: string, data?: Record<any, any>): Promise<T> {
    return this.create(resource, data);
  }
}
