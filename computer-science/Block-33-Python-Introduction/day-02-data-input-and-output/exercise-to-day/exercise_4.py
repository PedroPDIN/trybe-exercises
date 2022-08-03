import json
import csv


def get_books(file):
    return json.load(file)


def books_categories(books):
    categories = {}
    for book in books:
        for category in book['categories']:
            if not categories.get(category):
                categories[category] = 0
            categories[category] += 1

        return categories


def calc_percentage(book_categories, total_books):
    return [
            [category, num_books / total_books]
            for category, num_books in book_categories.items()
    ]


def write_csv(file, header, rows):
    writer = csv.writer(file)
    writer.writerow(header)
    writer.writerows(rows)


if __name__ == '__main__':
    with open("books.json") as file:
        books = get_books(file)

    book_by_categories = books_categories(books)

    book_percentage = calc_percentage(book_by_categories, len(books))

    header = ["categoria", "porcentagem"]
    with open("report.csv", "w") as file:
        write_csv(file, header, book_percentage)
