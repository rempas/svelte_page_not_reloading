const quotes: Hash<string, string>[] = [
   {
      quote: "Be yourself; everyone else is already taken.",
      person: "Oscar Wilde"
   },
]

export function getQuote(): string {
   return quotes[0].quote;
}
