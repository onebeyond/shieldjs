import { http, HttpResponse } from 'msw'

export const handlers = [
  http.get('https://jsonplaceholder.typicode.com/users/1', () => {
    return HttpResponse.json({
      id: 1,
      name: 'MSW mocked name',
      username: 'MSWUser'
    })
  })
]
