"func (param i32 i32)\n(local i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32)\n  get_global 4\n  set_local 6\n  get_global 4\n  i32.const 16\n  i32.add\n  set_global 4\n  get_local 0\n  i32.load offset=0 align=4\n  tee_local 2\n  if\n    get_local 2\n    i32.load offset=4 align=4\n    tee_local 3\n    if\n      get_local 3\n      call 12\n      get_local 0\n      i32.load offset=0 align=4\n      i32.const 0\n      i32.store offset=4 align=4\n      get_local 0\n      i32.load offset=0 align=4\n      set_local 2\n    end\n    get_local 2\n    i32.load offset=12 align=4\n    tee_local 3\n    if\n      get_local 3\n      call 12\n      get_local 0\n      i32.load offset=0 align=4\n      i32.const 0\n      i32.store offset=12 align=4\n      get_local 0\n      i32.load offset=0 align=4\n      set_local 2\n    end\n    get_local 2\n    call 12\n    get_local 0\n    i32.const 0\n    i32.store offset=0 align=4\n  end\n  i32.const 24\n  call 16\n  tee_local 3\n  if\n    get_local 3\n    i32.const -4\n    i32.add\n    i32.load offset=0 align=4\n    i32.const 3\n    i32.and\n    if\n      get_local 3\n      i64.const 0\n      i64.store offset=0 align=1\n      get_local 3\n      i64.const 0\n      i64.store offset=8 align=1\n      get_local 3\n      i64.const 0\n      i64.store offset=16 align=1\n    end\n  end\n  get_local 0\n  get_local 3\n  i32.store offset=0 align=4\n  get_local 3\n  i32.const 32\n  i32.store offset=0 align=4\n  i32.const 32\n  call 16\n  tee_local 2\n  if\n    get_local 2\n    i32.const -4\n    i32.add\n    i32.load offset=0 align=4\n    i32.const 3\n    i32.and\n    if\n      get_local 2\n      i64.const 0\n      i64.store offset=0 align=1\n      get_local 2\n      i64.const 0\n      i64.store offset=8 align=1\n      get_local 2\n      i64.const 0\n      i64.store offset=16 align=1\n      get_local 2\n      i64.const 0\n      i64.store offset=24 align=1\n    end\n  end\n  get_local 3\n  get_local 2\n  i32.store offset=4 align=4\n  get_local 2\n  get_local 1\n  i64.load offset=0 align=1\n  i64.store offset=0 align=1\n  get_local 2\n  get_local 1\n  i64.load offset=8 align=1\n  i64.store offset=8 align=1\n  get_local 2\n  get_local 1\n  i64.load offset=16 align=1\n  i64.store offset=16 align=1\n  get_local 2\n  get_local 1\n  i64.load offset=24 align=1\n  i64.store offset=24 align=1\n  get_local 0\n  i32.load offset=0 align=4\n  tee_local 2\n  i32.load offset=0 align=4\n  i32.const 2\n  i32.shr_u\n  set_local 1\n  get_local 2\n  i32.const 20\n  i32.add\n  tee_local 4\n  get_local 1\n  i32.store offset=0 align=4\n  get_local 2\n  i32.const 16\n  i32.add\n  tee_local 7\n  get_local 1\n  i32.const 7\n  i32.add\n  tee_local 1\n  i32.store offset=0 align=4\n  get_local 2\n  get_local 1\n  i32.const 4\n  i32.shl\n  tee_local 3\n  i32.store offset=8 align=4\n  get_local 3\n  call 16\n  tee_local 1\n  if\n    get_local 1\n    i32.const -4\n    i32.add\n    i32.load offset=0 align=4\n    i32.const 3\n    i32.and\n    if\n      get_local 1\n      i32.const 0\n      get_local 3\n      call 14\n      drop\n    end\n  end\n  get_local 2\n  get_local 1\n  i32.store offset=12 align=4\n  get_local 1\n  get_local 2\n  i32.load offset=4 align=4\n  get_local 2\n  i32.load offset=0 align=4\n  call 11\n  drop\n  get_local 4\n  i32.load offset=0 align=4\n  tee_local 1\n  get_local 7\n  i32.load offset=0 align=4\n  i32.const 2\n  i32.shl\n  i32.ge_u\n  if\n    get_local 6\n    set_global 4\n    return\n  end\n  get_local 6\n  i32.const 1\n  i32.add\n  set_local 9\n  get_local 6\n  i32.const 2\n  i32.add\n  set_local 11\n  get_local 6\n  i32.const 3\n  i32.add\n  set_local 12\n  get_local 1\n  set_local 8\n  loop\n    get_local 6\n    get_local 2\n    i32.load offset=12 align=4\n    tee_local 13\n    get_local 1\n    i32.const 2\n    i32.shl\n    tee_local 10\n    i32.const -4\n    i32.add\n    i32.add\n    i32.load offset=0 align=1\n    tee_local 5\n    i32.store offset=0 align=4\n    get_local 5\n    i32.const 8\n    i32.shr_u\n    set_local 14\n    get_local 5\n    i32.const 16\n    i32.shr_u\n    set_local 15\n    get_local 5\n    i32.const 24\n    i32.shr_u\n    set_local 3\n    get_local 1\n    get_local 8\n    i32.rem_u\n    tee_local 16\n    if\n      get_local 15\n      i32.const 255\n      i32.and\n      set_local 2\n      get_local 14\n      i32.const 255\n      i32.and\n      set_local 7\n      get_local 5\n      i32.const 255\n      i32.and\n      set_local 4\n      get_local 8\n      i32.const 6\n      i32.gt_u\n      get_local 16\n      i32.const 4\n      i32.eq\n      i32.and\n      if\n        get_local 6\n        get_local 5\n        i32.const 4\n        i32.shr_u\n        i32.const 15\n        i32.and\n        i32.const 4\n        i32.shl\n        i32.const 9456\n        i32.add\n        get_local 5\n        i32.const 15\n        i32.and\n        i32.add\n        i32.load8_s offset=0 align=1\n        tee_local 4\n        i32.store8 offset=0 align=1\n        get_local 9\n        get_local 5\n        i32.const 12\n        i32.shr_u\n        i32.const 15\n        i32.and\n        i32.const 4\n        i32.shl\n        i32.const 9456\n        i32.add\n        get_local 14\n        i32.const 15\n        i32.and\n        i32.add\n        i32.load8_s offset=0 align=1\n        tee_local 7\n        i32.store8 offset=0 align=1\n        get_local 11\n        get_local 5\n        i32.const 20\n        i32.shr_u\n        i32.const 15\n        i32.and\n        i32.const 4\n        i32.shl\n        i32.const 9456\n        i32.add\n        get_local 15\n        i32.const 15\n        i32.and\n        i32.add\n        i32.load8_s offset=0 align=1\n        tee_local 2\n        i32.store8 offset=0 align=1\n        get_local 12\n        get_local 5\n        i32.const 28\n        i32.shr_u\n        i32.const 4\n        i32.shl\n        i32.const 9456\n        i32.add\n        get_local 3\n        i32.const 15\n        i32.and\n        i32.add\n        i32.load8_s offset=0 align=1\n        tee_local 3\n        i32.store8 offset=0 align=1\n      end\n    else\n      get_local 6\n      get_local 9\n      i32.const 3\n      call 31\n      drop\n      get_local 6\n      i32.load8_u offset=0 align=1\n      tee_local 2\n      i32.const 4\n      i32.shr_u\n      i32.const 4\n      i32.shl\n      i32.const 9456\n      i32.add\n      get_local 2\n      i32.const 15\n      i32.and\n      i32.add\n      i32.load8_s offset=0 align=1\n      set_local 4\n      get_local 9\n      get_local 9\n      i32.load8_u offset=0 align=1\n      tee_local 2\n      i32.const 4\n      i32.shr_u\n      i32.const 4\n      i32.shl\n      i32.const 9456\n      i32.add\n      get_local 2\n      i32.const 15\n      i32.and\n      i32.add\n      i32.load8_s offset=0 align=1\n      tee_local 7\n      i32.store8 offset=0 align=1\n      get_local 11\n      get_local 11\n      i32.load8_u offset=0 align=1\n      tee_local 2\n      i32.const 4\n      i32.shr_u\n      i32.const 4\n      i32.shl\n      i32.const 9456\n      i32.add\n      get_local 2\n      i32.const 15\n      i32.and\n      i32.add\n      i32.load8_s offset=0 align=1\n      tee_local 2\n      i32.store8 offset=0 align=1\n      get_local 12\n      get_local 5\n      i32.const 4\n      i32.shr_u\n      i32.const 15\n      i32.and\n      i32.const 4\n      i32.shl\n      i32.const 9456\n      i32.add\n      get_local 5\n      i32.const 15\n      i32.and\n      i32.add\n      i32.load8_s offset=0 align=1\n      tee_local 3\n      i32.store8 offset=0 align=1\n      get_local 6\n      get_local 1\n      get_local 8\n      i32.div_u\n      i32.const 9711\n      i32.add\n      i32.load8_s offset=0 align=1\n      get_local 4\n      i32.xor\n      tee_local 4\n      i32.store8 offset=0 align=1\n    end\n    get_local 13\n    get_local 10\n    i32.add\n    get_local 13\n    get_local 1\n    get_local 8\n    i32.sub\n    i32.const 2\n    i32.shl\n    i32.add\n    i32.load8_s offset=0 align=1\n    get_local 4\n    i32.xor\n    i32.store8 offset=0 align=1\n    get_local 0\n    i32.load offset=0 align=4\n    tee_local 4\n    i32.load offset=12 align=4\n    tee_local 8\n    get_local 10\n    i32.const 1\n    i32.or\n    i32.add\n    get_local 8\n    get_local 1\n    get_local 4\n    i32.load offset=20 align=4\n    i32.sub\n    i32.const 2\n    i32.shl\n    i32.const 1\n    i32.or\n    i32.add\n    i32.load8_s offset=0 align=1\n    get_local 7\n    i32.xor\n    i32.store8 offset=0 align=1\n    get_local 0\n    i32.load offset=0 align=4\n    tee_local 4\n    i32.load offset=12 align=4\n    tee_local 7\n    get_local 10\n    i32.const 2\n    i32.or\n    i32.add\n    get_local 7\n    get_local 1\n    get_local 4\n    i32.load offset=20 align=4\n    i32.sub\n    i32.const 2\n    i32.shl\n    i32.const 2\n    i32.or\n    i32.add\n    i32.load8_s offset=0 align=1\n    get_local 2\n    i32.xor\n    i32.store8 offset=0 align=1\n    get_local 0\n    i32.load offset=0 align=4\n    tee_local 2\n    i32.load offset=12 align=4\n    tee_local 4\n    get_local 10\n    i32.const 3\n    i32.or\n    i32.add\n    get_local 4\n    get_local 1\n    get_local 2\n    i32.load offset=20 align=4\n    i32.sub\n    i32.const 2\n    i32.shl\n    i32.const 3\n    i32.or\n    i32.add\n    i32.load8_s offset=0 align=1\n    get_local 3\n    i32.xor\n    i32.store8 offset=0 align=1\n    get_local 1\n    i32.const 1\n    i32.add\n    tee_local 1\n    get_local 0\n    i32.load offset=0 align=4\n    tee_local 2\n    i32.load offset=16 align=4\n    i32.const 2\n    i32.shl\n    i32.lt_u\n    if\n      get_local 2\n      i32.load offset=20 align=4\n      set_local 8\n      br 1\n    end\n  end\n  get_local 6\n  set_global 4\nend\n"