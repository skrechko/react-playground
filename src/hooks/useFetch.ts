/**
 Завдання:
    1. Реалізувати хук useFetch, який приймає URL і повертає дані з цього URL.
    2. Хук повинен використовувати функцію fetch для отримання даних.
    3. Хук повинен повертати масив із двох елементів: об'єкт з полями data, loading, error та функцію refetch [{data, loading, error}, refetch].
    4. Використати хук useFetch в компоненті PostsList для отримання даних з https://jsonplaceholder.typicode.com/posts.
    5. Забезпечити обробку помилок та стан завантаження.
    6. Додати можливість повторного запиту даних через функцію refetch.
    7. Використати setTimeout для затримки завантаження даних на 2 секунди.
*/

export function useFetch<T>() {}