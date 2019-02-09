# REGEX - Regular Expression

## General

#### A regular expression is a special text string for describing a search pattern.

Cu ajutorul JS Regex, putem face o cautare foarte amanuntita in texte, cu ajutorul unei 
expresii simple precum:

```javascript

const string = 'Item text is just a demo.'

const re = /Item/

console.log(re.test(string))
// true

console.log(re.exec(string))
// ["Item", index: 0, input: "Item text is just a demo.", groups: undefined]s

```

In exemplul de mai sus, re.test(string) intoarce o valoare de tip boolean - false/true, 
iar re.exect(string), intoarce o matrice ce contine expresia cautata (Item).

## Online testing:

[gexr](https://regexr.com/)

### Lookahead: POZITIV (?=...) / NEGATIV (?!...) 

Ce s-ar putea traduce prin 'verifica daca string-ul cautat este urmat si de ...'.
Sunt doua tipuri de lookahead: positive si negative.

Cel pozitiv presune ca sa identificam expresia ce contine si conditia de dupa string-ul cautat (Item in cazul nostru).
Cel negativ presune ca sa identificam expresia ce NU contine si conditia de dupa string-ul cautat (Item in cazul nostru).
Mai exact, folosind exemplul de mai sus, am avea:

```javascript

/* POSITIVE */
const string = 'Item text is just a demo. And Item 10 is just for this example.'

/* cautam daca in string exista cuvantul Item urmat de o pauza si apoi de cifra 10. */
const re = /Item(?= 10)/

console.log(re.test(string))
// true

/* NEGATIVE */
const string = 'Item text is just a demo.'

/* cautam daca in string exista cuvantul Item ce nu e urmat de o pauza si apoi de cuvantul "text". */
const re = /Item(?! text)/

console.log(re.test(string))
// false > pentru ca in string, Item este urmat de " text".

```

### Lookahead si Lookbehind in acelasi timp - ES 2018 > lookarounds

Sa presupunem ca dorim sa extragem pretul unui produs ce are simbolul euro in fata, dar sa returnam
doar cifra, fara simbol. Putem face acest lucru in felul urmator:

```javascript
const re = /(?<=€)\d+(\.\d*)?/;
/* (?<=€) - cauta daca exista numere precedate de semnul euro */
/* d+(\.\d*) - cauta digit/cifra urmat de orice alte cifre */

console.log(re.exec('199'));
// → null

console.log(re.exec('$199'));
// → null

console.log(re.exec('€199'));
// → ["199", undefined, index: 1, input: "€199", groups: undefined]
```

The negative version of lookbehind is denoted by (?<!...) and enables you to match a pattern that is not preceded by the pattern specified within the lookbehind. For example, the regular expression /(?<!\d{3}) meters/ matches the word “meters” if three digits do not come before it:

```javascript
const re = /(?<!\d{3}) meters/;

console.log(re.exec('10 meters'));
// → [" meters", index: 2, input: "10 meters", groups: undefined]

console.log(re.exec('100 meters'));    
// → null
```

Putem compune un patern complex folosind mai multe lookbehinds (pozitive si negative).
De exemplu, dorim sa gasim o expresie intr-un text, de tipul "cauta doua cifre urmate de cuvantul meters dar cifrele sa nu fie 35".

```javascript
const re = /(?<=\d{2})(?<!35) meters/;

console.log(re.exec('35 meters'));
// → null

console.log(re.exec('meters'));
// → null

console.log(re.exec('4 meters'));
// → null

console.log(re.exec('14 meters'));
// → ["meters", index: 2, input: "14 meters", groups: undefined]
```

### Named Capture Groups

Putem grupa o parte a unei regex prin incapsularea acesteia intre paranteze. De exemplu daca dorim sa extragem numele fisierelor de tip .jpg:

```javascript
const re = /(\w+)\.jpg/;
const str = 'File name: cat.jpg';
const match = re.exec(str);
const fileName = match[1];

// The second element in the resulting array holds the portion of the string that parentheses matched
console.log(match);
// → ["cat.jpg", "cat", index: 11, input: "File name: cat.jpg", groups: undefined]

console.log(fileName);
// → cat
```

Aceasta functie de named group ce vine in ES2018 este extrem de utila cand dorim sa extragem anul, luna si ziua intr-un obiect JS corect formatat:

```javascript
const re = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;
const match = re.exec('2020-03-04');

console.log(match.groups);          // → {year: "2020", month: "03", day: "04"}
console.log(match.groups.year);     // → 2020
console.log(match.groups.month);    // → 03
console.log(match.groups.day);      // → 04
```

The new syntax also works well with destructuring assignment:

```javascript
const re = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;
const [match, year, month, day] = re.exec('2020-03-04');

console.log(match);    // → 2020-03-04
console.log(year);     // → 2020
console.log(month);    // → 03
console.log(day);      // → 04
```

The groups object is always created, even if no named group exists in a regular expression:

```javascript
const re = /\d+/;
const match = re.exec('123');

console.log('groups' in match);    // → true
```

#### Unicode Property Escapes

Among the new features introduced in ES2015 was Unicode awareness. However, shorthand character classes were still unable to match Unicode characters, even if the u flag was set.

Consider the following example:

```javascript
const str = '𝟠';

console.log(/\d/.test(str));     // → false
console.log(/\d/u.test(str));    // → false
```

𝟠 is considered a digit, but \d can only match ASCII [0-9], so the test() method returns false. Because changing the behavior of shorthand character classes would break existing regular expression patterns, it was decided to introduce a new type of escape sequence.

In ES2018, Unicode property escapes, denoted by \p{...}, are available in regular expressions when the u flag is set. Now to match any Unicode number, you can simply use \p{Number}, as shown below:

```javascript
const str = '𝟠';
console.log(/\p{Number}/u.test(str));     // → true
```

And to match any Unicode alphabetic character, you can use \p{Alphabetic}:

```javascript
const str = '漢';

console.log(/\p{Alphabetic}/u.test(str));     // → true

// the \w shorthand cannot match 漢
console.log(/\w/u.test(str));    // → false
```

\P{...} is the negated version of \p{...} and matches any character that \p{...} does not:

```javascript
console.log(/\P{Number}/u.test('𝟠'));    // → false
console.log(/\P{Number}/u.test('漢'));    // → true

console.log(/\P{Alphabetic}/u.test('𝟠'));    // → true
console.log(/\P{Alphabetic}/u.test('漢'));    // → false

```


## Exemple 
### (ATENTIE: verificati compatibilitatea in browser a fiecarui exemplu, deoarece unele reguli sunt noi introduse)

- extrage fragmentul de text ce urmeaza un patern dat, respectiv sa extragem doar taggurile HTML
de tip H2 dintr-un bloc de text:

```javascript
const block = `<h2>this is a h2</h2><p>this is a p</p>`

const re = /<h2>(.*?)<\/h2>/g // g = cautare globala, nu te opri dupa primul find

const result = block.match(re)

console.log(result)
// ["<h2>this is a h2</h2>"]
```

Exemplul de mai sus returneaza o matrice doar cu un element dat de tag-ul de tip H2 cautat.

Daca block-ul ar fi avut si atribute de tip class, id, etc, atunci am fi modificat const re, astfel:
const re = /<h2(.*?)>(.*?)<\/h2>/g


- named groups > ordinals;

```javascript
/* If an optional named group does not participate in the match, the groups object will still have a property for that named group but the property will have a value of undefined: */
const re = /\d+(?<ordinal>st|nd|rd|th)?/;

let match = re.exec('2nd');

console.log('ordinal' in match.groups);    // → true
console.log(match.groups.ordinal);         // → nd

match = re.exec('2');

console.log('ordinal' in match.groups);    // → true
console.log(match.groups.ordinal);         // → undefined
```

```javascript
console.log(/(\w\w)\1/.test('abab'));    // → true

// if the last two letters are not the same 
// as the first two, the match will fail
console.log(/(\w\w)\1/.test('abcd'));    // → false
```

- cauta doua litere ce se repeta:

```javascript
console.log(/(\w\w)\1/.test('abab'));    // → true
// The "\w" means "any word character" which usually means alphanumeric (letters, numbers, regardless of case) plus underscore (_)

// if the last two letters are not the same 
// as the first two, the match will fail
console.log(/(\w\w)\1/.test('abcd'));    // → false
```

- cauta cuvinte duplicate succesive:

```javascript
const re = /\b(?<dup>\w+)\s+\k<dup>\b/;
/* b - backspace, apoi cuvant (w+), apoi spatiu (s+) apoi reia dupa numele grupului <dup>;
 * conform acestei expressi, cuvantul on este precedat de backspace, apoi spatiu dupa, si repetitia lui */

const match = re.exec("I'm not lazy, I'm on on energy saving mode");        

console.log(match.index);    // → 18
console.log(match[0]);       // → on on
```

sau asa, folosind indexul grupului /1:

```javascript
const re = /\b(?<dup>\w+)\s+\1\b/;

const match = re.exec("I'm not lazy, I'm on on energy saving mode");        

console.log(match.index);    // → 18
console.log(match[0]);       // → on on 
```

sau putem mixa numele grupului cu indexul:

```javascript
const re = /(?<digit>\d):\1:\k<digit>/;

const match = re.exec('5:5:5');        

console.log(match[0]);    // → 5:5:5
```

- putem folosi regex named si pentru replace in string:

```javascript
const str = 'War & Peace';

console.log(str.replace(/(War) & (Peace)/, '$2 & $1'));    
// → Peace & War

console.log(str.replace(/(?<War>War) & (?<Peace>Peace)/, '$<Peace> & $<War>'));    
// → Peace & War
```

sau folosind o functie:

```javascript
const str = 'War & Peace';

const result = str.replace(/(?<War>War) & (?<Peace>Peace)/, function(match, group1, group2, offset, string) {
    return group2 + ' & ' + group1;
});

console.log(result);    // → Peace & War
```

- match line break characters as well:

```javascript
console.log(/./s.test('\n'));    // → true
console.log(/./s.test('\r'));    // → true
```

## Reguli

[rules](http://www.javascriptkit.com/javatutors/redev2.shtml)

- The "\w" means "any word character" which usually means alphanumeric (letters, numbers, regardless of case) plus underscore (_)
- \s matches whitespace (spaces, tabs and new lines). \S is negated \s.
- \	Escapes special characters to literal and literal characters to special. (E.g: /\(s\)/ matches '(s)' while /(\s)/ matches any whitespace and captures the match.)
- /./s - orice caracter inclusiv dupa line break
