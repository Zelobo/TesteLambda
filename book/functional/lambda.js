id = a => a
self = f => f(f)
fst = a => b => a
flip = f => a => b => f(b)(a)

snd = a => b => b
snd = flip(fst)
snd = fst(id)

comp = f => g => x => f(g(x))

M = self
T = V = verum = fst
F = falsum = snd

/* synonyms */
inspect = Symbol.for('nodejs.util.inspect.custom')
fst[inspect] = () => 'fst / T'
snd[inspect] = () => 'snd / F'

not = p => p(F)(T)
or = p => q => p(p)(q)
and = p => q => p(q)(p)

eq = p => q => p(q)(not(q))

n0 = f => a => a // F
n1 = f => a => f(a)
n2 = f => a => f(f(a))
n3 = f => a => f(f(f(a)))
n4 = f => a => f(f(f(f(a))))
n5 = f => a => f(f(f(f(f(a)))))
n6 = f => a => f(f(f(f(f(f(a))))))
n7 = f => a => f(f(f(f(f(f(f(a)))))))
n8 = f => a => f(f(f(f(f(f(f(f(a))))))))
n9 = f => a => f(f(f(f(f(f(f(f(f(a)))))))))

num = n => n(x => x+1)(0)

succ = n => f => x => f(n(f)(x))

add = n => k => n(succ)(k) // addition

//add(n2)(n3) = n2(succ)(n3) = n2(f)(a) = succ(succ(n3)) = n5 

mult = n => k => ( x => n(k(x)) )


pow = n => k => k(n) 

iszero = n => n(fst(snd))(fst)

pair = a => b => f => f(a)(b)

trio = a => b => c => f => pair(a)(pair(b)(c))

head = p => p(fst)
tail = p => p(snd)

list = pair(0)(pair(1)(pair(2)('NULL')))

/*head(list)

tail(l)

tail(list)*/

index = n => list => head(n(tail)(list))

nil = {}

size = l => l === nil ? n0 : succ (size(tail(l)))

list = pair ('a')(pair('b')(pair('c')(pair('d')(nil))))

map = l => f => l === nil ? nil : pair(f(head(l)))(map(tail(l))(f))

function display (list) {
   let string = ''
   let el = list
   while (el !== nil) {
      string += head(el)+' '
      el = tail(el)
   }
   console.log(string)
}

display(list)

//list = map(list)(x => 'a'+x)

display(list)

filter = l => f => l === nil ? nil : f(head(l)) (pair(head(l))(filter(tail(l))(f))) (filter(tail(l))(f))
display(filter(list)(x => x.includes('c') ? T : F))

reduce = l => f => a => l === nil ? a : reduce(tail(l))(f)(f(a)(head(l))) 

list2 = pair (1)(pair(2)(pair(3)(pair(4)(nil))))


list = reduce(list2)(x => y => x + y)(0)


