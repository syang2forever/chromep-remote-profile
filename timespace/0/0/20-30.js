"func (param i32 i32 i32)\n(local i32 i32 i32 i32 i32 i32 i32 i32 i32)\n  get_global 4\n  set_local 3\n  get_global 4\n  i32.const 336\n  i32.add\n  set_global 4\n  get_local 3\n  i64.const 0\n  i64.store offset=0 align=4\n  get_local 3\n  i64.const 0\n  i64.store offset=8 align=4\n  get_local 3\n  i64.const 0\n  i64.store offset=16 align=4\n  get_local 3\n  i64.const 0\n  i64.store offset=24 align=4\n  get_local 3\n  i64.const 0\n  i64.store offset=32 align=4\n  get_local 3\n  i64.const 0\n  i64.store offset=40 align=4\n  get_local 3\n  i64.const 0\n  i64.store offset=48 align=4\n  get_local 3\n  i32.const 0\n  i32.store offset=56 align=4\n  get_local 3\n  i32.const 60\n  i32.add\n  tee_local 11\n  i32.const 65536\n  i32.store offset=0 align=4\n  get_local 3\n  i32.const 136\n  i32.add\n  tee_local 5\n  i32.const 0\n  i32.store offset=0 align=4\n  get_local 3\n  i32.const 64\n  i32.add\n  tee_local 6\n  i32.const 0\n  i32.store offset=0 align=4\n  get_local 3\n  i32.const 68\n  i32.add\n  tee_local 4\n  i32.const 0\n  i32.store offset=0 align=4\n  get_local 3\n  i32.const 140\n  i32.add\n  tee_local 7\n  i32.const 0\n  i32.store offset=0 align=4\n  get_local 3\n  get_local 0\n  get_local 1\n  i32.const 536870911\n  i32.and\n  tee_local 8\n  call 24\n  get_local 1\n  i32.const 536870848\n  i32.and\n  tee_local 1\n  get_local 8\n  i32.lt_u\n  if\n    loop\n      get_local 0\n      get_local 1\n      i32.add\n      i32.load8_s offset=0 align=1\n      set_local 9\n      get_local 5\n      get_local 5\n      i32.load offset=0 align=4\n      tee_local 10\n      i32.const 1\n      i32.add\n      i32.store offset=0 align=4\n      get_local 3\n      i32.const 72\n      i32.add\n      get_local 10\n      i32.add\n      get_local 9\n      i32.store8 offset=0 align=1\n      get_local 1\n      i32.const 1\n      i32.add\n      tee_local 1\n      get_local 8\n      i32.ne\n      br_if 0\n    end\n  end\n  get_local 7\n  i32.load offset=0 align=4\n  tee_local 1\n  if\n    get_local 3\n    get_local 5\n    i32.load offset=0 align=4\n    i32.add\n    i32.const 71\n    i32.add\n    tee_local 0\n    i32.const 1\n    get_local 1\n    i32.shl\n    i32.const -1\n    i32.add\n    i32.const 8\n    get_local 1\n    i32.sub\n    i32.shl\n    get_local 0\n    i32.load8_u offset=0 align=1\n    i32.and\n    i32.store8 offset=0 align=1\n    get_local 3\n    get_local 5\n    i32.load offset=0 align=4\n    i32.add\n    i32.const 71\n    i32.add\n    tee_local 0\n    i32.const 1\n    i32.const 7\n    get_local 7\n    i32.load offset=0 align=4\n    i32.sub\n    i32.shl\n    get_local 0\n    i32.load8_u offset=0 align=1\n    i32.xor\n    i32.store8 offset=0 align=1\n    get_local 7\n    i32.const 0\n    i32.store offset=0 align=4\n  else\n    get_local 5\n    get_local 5\n    i32.load offset=0 align=4\n    tee_local 0\n    i32.const 1\n    i32.add\n    i32.store offset=0 align=4\n    get_local 3\n    i32.const 72\n    i32.add\n    get_local 0\n    i32.add\n    i32.const -128\n    i32.store8 offset=0 align=1\n  end\n  block\n    block\n      get_local 5\n      i32.load offset=0 align=4\n      tee_local 0\n      i32.const 56\n      i32.gt_s\n      if\n        get_local 0\n        i32.const 64\n        i32.lt_s\n        if\n          loop\n            get_local 5\n            get_local 0\n            i32.const 1\n            i32.add\n            i32.store offset=0 align=4\n            get_local 3\n            i32.const 72\n            i32.add\n            get_local 0\n            i32.add\n            i32.const 0\n            i32.store8 offset=0 align=1\n            get_local 5\n            i32.load offset=0 align=4\n            tee_local 0\n            i32.const 64\n            i32.lt_s\n            br_if 0\n          end\n        end\n        get_local 3\n        get_local 3\n        i32.const 72\n        i32.add\n        i32.const 64\n        call 24\n        get_local 5\n        i32.const 0\n        i32.store offset=0 align=4\n        i32.const 0\n        set_local 0\n        br 1\n      else\n        get_local 0\n        i32.const 56\n        i32.ne\n        br_if 1\n      end\n      br 1\n    end\n    loop\n      get_local 5\n      get_local 0\n      i32.const 1\n      i32.add\n      i32.store offset=0 align=4\n      get_local 3\n      i32.const 72\n      i32.add\n      get_local 0\n      i32.add\n      i32.const 0\n      i32.store8 offset=0 align=1\n      get_local 5\n      i32.load offset=0 align=4\n      tee_local 0\n      i32.const 56\n      i32.lt_s\n      br_if 0\n    end\n  end\n  get_local 6\n  get_local 6\n  i32.load offset=0 align=4\n  i32.const 1\n  i32.add\n  tee_local 1\n  i32.store offset=0 align=4\n  get_local 1\n  i32.eqz\n  if\n    get_local 4\n    get_local 4\n    i32.load offset=0 align=4\n    i32.const 1\n    i32.add\n    i32.store offset=0 align=4\n  end\n  get_local 5\n  i32.const 64\n  i32.store offset=0 align=4\n  i32.const 64\n  set_local 0\n  loop\n    get_local 5\n    get_local 0\n    i32.const -1\n    i32.add\n    tee_local 0\n    i32.store offset=0 align=4\n    get_local 3\n    i32.const 72\n    i32.add\n    get_local 0\n    i32.add\n    get_local 1\n    i32.store8 offset=0 align=1\n    get_local 1\n    i32.const 8\n    i32.shr_u\n    set_local 1\n    get_local 5\n    i32.load offset=0 align=4\n    tee_local 0\n    i32.const 60\n    i32.gt_s\n    br_if 0\n  end\n  get_local 6\n  get_local 1\n  i32.store offset=0 align=4\n  get_local 0\n  i32.const 56\n  i32.gt_s\n  if\n    get_local 4\n    i32.load offset=0 align=4\n    set_local 1\n    loop\n      get_local 5\n      get_local 0\n      i32.const -1\n      i32.add\n      tee_local 0\n      i32.store offset=0 align=4\n      get_local 3\n      i32.const 72\n      i32.add\n      get_local 0\n      i32.add\n      get_local 1\n      i32.store8 offset=0 align=1\n      get_local 1\n      i32.const 8\n      i32.shr_u\n      set_local 1\n      get_local 5\n      i32.load offset=0 align=4\n      tee_local 0\n      i32.const 56\n      i32.gt_s\n      br_if 0\n    end\n    get_local 4\n    get_local 1\n    i32.store offset=0 align=4\n  end\n  get_local 3\n  get_local 3\n  i32.const 72\n  i32.add\n  i32.const 64\n  call 24\n  get_local 3\n  i32.const 272\n  i32.add\n  tee_local 4\n  get_local 3\n  i64.load offset=0 align=4\n  i64.store offset=0 align=4\n  get_local 4\n  get_local 3\n  i64.load offset=8 align=4\n  i64.store offset=8 align=4\n  get_local 4\n  get_local 3\n  i64.load offset=16 align=4\n  i64.store offset=16 align=4\n  get_local 4\n  get_local 3\n  i64.load offset=24 align=4\n  i64.store offset=24 align=4\n  get_local 4\n  get_local 3\n  i64.load offset=32 align=4\n  i64.store offset=32 align=4\n  get_local 4\n  get_local 3\n  i64.load offset=40 align=4\n  i64.store offset=40 align=4\n  get_local 4\n  get_local 3\n  i64.load offset=48 align=4\n  i64.store offset=48 align=4\n  get_local 4\n  get_local 3\n  i64.load offset=56 align=4\n  i64.store offset=56 align=4\n  get_local 4\n  get_local 3\n  i32.const 208\n  i32.add\n  tee_local 1\n  i32.const 0\n  call 10\n  get_local 1\n  get_local 3\n  i32.const 144\n  i32.add\n  tee_local 0\n  i32.const 1\n  call 10\n  get_local 0\n  get_local 1\n  i32.const 2\n  call 10\n  get_local 1\n  get_local 0\n  i32.const 3\n  call 10\n  get_local 0\n  get_local 1\n  i32.const 4\n  call 10\n  get_local 1\n  get_local 0\n  i32.const 5\n  call 10\n  get_local 0\n  get_local 1\n  i32.const 6\n  call 10\n  get_local 1\n  get_local 0\n  i32.const 7\n  call 10\n  get_local 0\n  get_local 1\n  i32.const 8\n  call 10\n  get_local 1\n  get_local 4\n  i32.const 9\n  call 10\n  get_local 3\n  get_local 3\n  i32.load offset=0 align=4\n  get_local 4\n  i32.load offset=0 align=4\n  i32.xor\n  i32.store offset=0 align=4\n  get_local 3\n  i32.const 4\n  i32.add\n  tee_local 0\n  get_local 0\n  i32.load offset=0 align=4\n  get_local 4\n  i32.load offset=4 align=4\n  i32.xor\n  i32.store offset=0 align=4\n  get_local 3\n  i32.const 8\n  i32.add\n  tee_local 0\n  get_local 0\n  i32.load offset=0 align=4\n  get_local 4\n  i32.load offset=8 align=4\n  i32.xor\n  i32.store offset=0 align=4\n  get_local 3\n  i32.const 12\n  i32.add\n  tee_local 0\n  get_local 0\n  i32.load offset=0 align=4\n  get_local 4\n  i32.load offset=12 align=4\n  i32.xor\n  i32.store offset=0 align=4\n  get_local 3\n  i32.const 16\n  i32.add\n  tee_local 0\n  get_local 0\n  i32.load offset=0 align=4\n  get_local 4\n  i32.load offset=16 align=4\n  i32.xor\n  i32.store offset=0 align=4\n  get_local 3\n  i32.const 20\n  i32.add\n  tee_local 0\n  get_local 0\n  i32.load offset=0 align=4\n  get_local 4\n  i32.load offset=20 align=4\n  i32.xor\n  i32.store offset=0 align=4\n  get_local 3\n  i32.const 24\n  i32.add\n  tee_local 0\n  get_local 0\n  i32.load offset=0 align=4\n  get_local 4\n  i32.load offset=24 align=4\n  i32.xor\n  i32.store offset=0 align=4\n  get_local 3\n  i32.const 28\n  i32.add\n  tee_local 0\n  get_local 0\n  i32.load offset=0 align=4\n  get_local 4\n  i32.load offset=28 align=4\n  i32.xor\n  i32.store offset=0 align=4\n  get_local 3\n  i32.const 32\n  i32.add\n  tee_local 0\n  i32.load offset=0 align=4\n  get_local 4\n  i32.load offset=32 align=4\n  i32.xor\n  set_local 6\n  get_local 0\n  get_local 6\n  i32.store offset=0 align=4\n  get_local 3\n  i32.const 36\n  i32.add\n  tee_local 0\n  i32.load offset=0 align=4\n  get_local 4\n  i32.load offset=36 align=4\n  i32.xor\n  set_local 7\n  get_local 0\n  get_local 7\n  i32.store offset=0 align=4\n  get_local 3\n  i32.const 40\n  i32.add\n  tee_local 0\n  i32.load offset=0 align=4\n  get_local 4\n  i32.load offset=40 align=4\n  i32.xor\n  set_local 8\n  get_local 0\n  get_local 8\n  i32.store offset=0 align=4\n  get_local 3\n  i32.const 44\n  i32.add\n  tee_local 0\n  i32.load offset=0 align=4\n  get_local 4\n  i32.load offset=44 align=4\n  i32.xor\n  set_local 9\n  get_local 0\n  get_local 9\n  i32.store offset=0 align=4\n  get_local 3\n  i32.const 48\n  i32.add\n  tee_local 0\n  i32.load offset=0 align=4\n  get_local 4\n  i32.load offset=48 align=4\n  i32.xor\n  set_local 10\n  get_local 0\n  get_local 10\n  i32.store offset=0 align=4\n  get_local 3\n  i32.const 52\n  i32.add\n  tee_local 0\n  i32.load offset=0 align=4\n  get_local 4\n  i32.load offset=52 align=4\n  i32.xor\n  set_local 1\n  get_local 0\n  get_local 1\n  i32.store offset=0 align=4\n  get_local 3\n  i32.const 56\n  i32.add\n  tee_local 0\n  get_local 0\n  i32.load offset=0 align=4\n  get_local 4\n  i32.load offset=56 align=4\n  i32.xor\n  i32.store offset=0 align=4\n  get_local 11\n  get_local 11\n  i32.load offset=0 align=4\n  get_local 4\n  i32.load offset=60 align=4\n  i32.xor\n  i32.store offset=0 align=4\n  get_local 2\n  get_local 6\n  i32.store8 offset=0 align=1\n  get_local 2\n  get_local 6\n  i32.const 8\n  i32.shr_u\n  i32.store8 offset=1 align=1\n  get_local 2\n  get_local 6\n  i32.const 16\n  i32.shr_u\n  i32.store8 offset=2 align=1\n  get_local 2\n  get_local 6\n  i32.const 24\n  i32.shr_u\n  i32.store8 offset=3 align=1\n  get_local 2\n  get_local 7\n  i32.store8 offset=4 align=1\n  get_local 2\n  get_local 7\n  i32.const 8\n  i32.shr_u\n  i32.store8 offset=5 align=1\n  get_local 2\n  get_local 7\n  i32.const 16\n  i32.shr_u\n  i32.store8 offset=6 align=1\n  get_local 2\n  get_local 7\n  i32.const 24\n  i32.shr_u\n  i32.store8 offset=7 align=1\n  get_local 2\n  get_local 8\n  i32.store8 offset=8 align=1\n  get_local 2\n  get_local 8\n  i32.const 8\n  i32.shr_u\n  i32.store8 offset=9 align=1\n  get_local 2\n  get_local 8\n  i32.const 16\n  i32.shr_u\n  i32.store8 offset=10 align=1\n  get_local 2\n  get_local 8\n  i32.const 24\n  i32.shr_u\n  i32.store8 offset=11 align=1\n  get_local 2\n  get_local 9\n  i32.store8 offset=12 align=1\n  get_local 2\n  get_local 9\n  i32.const 8\n  i32.shr_u\n  i32.store8 offset=13 align=1\n  get_local 2\n  get_local 9\n  i32.const 16\n  i32.shr_u\n  i32.store8 offset=14 align=1\n  get_local 2\n  get_local 9\n  i32.const 24\n  i32.shr_u\n  i32.store8 offset=15 align=1\n  get_local 2\n  get_local 10\n  i32.store8 offset=16 align=1\n  get_local 2\n  get_local 10\n  i32.const 8\n  i32.shr_u\n  i32.store8 offset=17 align=1\n  get_local 2\n  get_local 10\n  i32.const 16\n  i32.shr_u\n  i32.store8 offset=18 align=1\n  get_local 2\n  get_local 10\n  i32.const 24\n  i32.shr_u\n  i32.store8 offset=19 align=1\n  get_local 2\n  get_local 1\n  i32.store8 offset=20 align=1\n  get_local 2\n  get_local 1\n  i32.const 8\n  i32.shr_u\n  i32.store8 offset=21 align=1\n  get_local 2\n  get_local 1\n  i32.const 16\n  i32.shr_u\n  i32.store8 offset=22 align=1\n  get_local 2\n  get_local 3\n  i32.load8_s offset=55 align=1\n  i32.store8 offset=23 align=1\n  get_local 2\n  get_local 0\n  i32.load8_s offset=0 align=1\n  i32.store8 offset=24 align=1\n  get_local 2\n  get_local 3\n  i32.load8_s offset=57 align=1\n  i32.store8 offset=25 align=1\n  get_local 2\n  get_local 3\n  i32.load8_s offset=58 align=1\n  i32.store8 offset=26 align=1\n  get_local 2\n  get_local 3\n  i32.load8_s offset=59 align=1\n  i32.store8 offset=27 align=1\n  get_local 2\n  get_local 11\n  i32.load8_s offset=0 align=1\n  i32.store8 offset=28 align=1\n  get_local 2\n  get_local 3\n  i32.load8_s offset=61 align=1\n  i32.store8 offset=29 align=1\n  get_local 2\n  get_local 3\n  i32.load8_s offset=62 align=1\n  i32.store8 offset=30 align=1\n  get_local 2\n  get_local 3\n  i32.load8_s offset=63 align=1\n  i32.store8 offset=31 align=1\n  get_local 3\n  set_global 4\nend\n"