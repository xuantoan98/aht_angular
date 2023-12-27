import fetch, { Response } from "node-fetch";

export interface IPost {
  id: string;
  title: string;
  author: string;
}

export function callAPI(url: string): Promise<IPost[]> {
  return new Promise<IPost[]>((resolve, reject) => {
    fetch(url)
      .then((response: Response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json() as Promise<IPost[]>;
      })
      .then((data: IPost[]) => {
        resolve(data);
      })
      .catch((error: Error) => {
        reject(error);
      });
  });
}
