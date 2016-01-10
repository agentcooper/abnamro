### abnamro

Finance report tool for ABN AMRO.

## Usage

```
Usage: bin/abnamro [options]

Options:
  --json          path to json data                          [string] [required]
  --year          for which year                             [string] [required]
  --transactions  show transactions                                    [boolean]
  --exclude       categories to exclude                                  [array]
```

## Getting JSON

I probably should've used TXT, but here it goes:

1. Login to ABN from https://www.abnamro.nl/portalserver/en/personal/index.html
2. Open transactions view
3. Scroll down as much as you want to (yep)
4. Open the console (CMD + Shift + J), and run the code from `web.js`
5. Copy output to `transactions.json`

## Example output (clipped)

```bash
./bin/abnamro --json transactions.json --year 2015 --exclude rent salary
```

```
…

===== 10-2015 =====

-4      concerts
-10     charity
-15     mobile
-25     shopping
-74     insurance
-87     credit
-94     unknown
-114    transport
-170    cash
-257    groceries
-312    food
-----
-1162   total spent

…
```
