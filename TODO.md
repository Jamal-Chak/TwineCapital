==> Cloning from https://github.com/Jamal-Chak/TwineCapital
==> Checking out commit d2a8bbee69a40cc0fdc22088b887a3f5f0cbcfde in branch main
==> Installing Python version 3.13.4...
==> Using Python version 3.13.4 (default)
==> Docs on specifying a Python version: https://render.com/docs/python-version
==> Using Poetry version 2.1.3 (default)
==> Docs on specifying a Poetry version: https://render.com/docs/poetry-version
==> Running build command 'pip install -r requirements.txt'...
Collecting fastapi (from -r requirements.txt (line 1))
  Downloading fastapi-0.127.0-py3-none-any.whl.metadata (30 kB)
Collecting uvicorn (from -r requirements.txt (line 2))
  Downloading uvicorn-0.40.0-py3-none-any.whl.metadata (6.7 kB)
Collecting pydantic (from -r requirements.txt (line 3))
  Downloading pydantic-2.12.5-py3-none-any.whl.metadata (90 kB)
Collecting python-multipart (from -r requirements.txt (line 4))
  Downloading python_multipart-0.0.21-py3-none-any.whl.metadata (1.8 kB)
Collecting python-dotenv (from -r requirements.txt (line 5))
  Downloading python_dotenv-1.2.1-py3-none-any.whl.metadata (25 kB)
Collecting feedparser (from -r requirements.txt (line 6))
  Downloading feedparser-6.0.12-py3-none-any.whl.metadata (2.7 kB)
Collecting requests (from -r requirements.txt (line 7))
  Downloading requests-2.32.5-py3-none-any.whl.metadata (4.9 kB)
Collecting supabase (from -r requirements.txt (line 8))
  Downloading supabase-2.27.0-py3-none-any.whl.metadata (4.6 kB)
Collecting starlette<0.51.0,>=0.40.0 (from fastapi->-r requirements.txt (line 1))
  Downloading starlette-0.50.0-py3-none-any.whl.metadata (6.3 kB)
Collecting typing-extensions>=4.8.0 (from fastapi->-r requirements.txt (line 1))
  Downloading typing_extensions-4.15.0-py3-none-any.whl.metadata (3.3 kB)
Collecting annotated-doc>=0.0.2 (from fastapi->-r requirements.txt (line 1))
  Downloading annotated_doc-0.0.4-py3-none-any.whl.metadata (6.6 kB)
Collecting anyio<5,>=3.6.2 (from starlette<0.51.0,>=0.40.0->fastapi->-r requirements.txt (line 1))
  Downloading anyio-4.12.0-py3-none-any.whl.metadata (4.3 kB)
Collecting idna>=2.8 (from anyio<5,>=3.6.2->starlette<0.51.0,>=0.40.0->fastapi->-r requirements.txt (line 1))
  Downloading idna-3.11-py3-none-any.whl.metadata (8.4 kB)
Collecting click>=7.0 (from uvicorn->-r requirements.txt (line 2))
  Downloading click-8.3.1-py3-none-any.whl.metadata (2.6 kB)
Collecting h11>=0.8 (from uvicorn->-r requirements.txt (line 2))
  Downloading h11-0.16.0-py3-none-any.whl.metadata (8.3 kB)
Collecting annotated-types>=0.6.0 (from pydantic->-r requirements.txt (line 3))
  Downloading annotated_types-0.7.0-py3-none-any.whl.metadata (15 kB)
Collecting pydantic-core==2.41.5 (from pydantic->-r requirements.txt (line 3))
  Downloading pydantic_core-2.41.5-cp313-cp313-manylinux_2_17_x86_64.manylinux2014_x86_64.whl.metadata (7.3 kB)
Collecting typing-inspection>=0.4.2 (from pydantic->-r requirements.txt (line 3))
  Downloading typing_inspection-0.4.2-py3-none-any.whl.metadata (2.6 kB)
Collecting sgmllib3k (from feedparser->-r requirements.txt (line 6))
  Downloading sgmllib3k-1.0.0.tar.gz (5.8 kB)
  Installing build dependencies: started
  Installing build dependencies: finished with status 'done'
  Getting requirements to build wheel: started
  Getting requirements to build wheel: finished with status 'done'
  Preparing metadata (pyproject.toml): started
  Preparing metadata (pyproject.toml): finished with status 'done'
Collecting charset_normalizer<4,>=2 (from requests->-r requirements.txt (line 7))
  Downloading charset_normalizer-3.4.4-cp313-cp313-manylinux2014_x86_64.manylinux_2_17_x86_64.manylinux_2_28_x86_64.whl.metadata (37 kB)
Collecting urllib3<3,>=1.21.1 (from requests->-r requirements.txt (line 7))
  Downloading urllib3-2.6.2-py3-none-any.whl.metadata (6.6 kB)
Collecting certifi>=2017.4.17 (from requests->-r requirements.txt (line 7))
  Downloading certifi-2025.11.12-py3-none-any.whl.metadata (2.5 kB)
Collecting realtime==2.27.0 (from supabase->-r requirements.txt (line 8))
  Downloading realtime-2.27.0-py3-none-any.whl.metadata (7.0 kB)
Collecting supabase-functions==2.27.0 (from supabase->-r requirements.txt (line 8))
  Downloading supabase_functions-2.27.0-py3-none-any.whl.metadata (2.4 kB)
Collecting storage3==2.27.0 (from supabase->-r requirements.txt (line 8))
  Downloading storage3-2.27.0-py3-none-any.whl.metadata (2.1 kB)
Collecting supabase-auth==2.27.0 (from supabase->-r requirements.txt (line 8))
  Downloading supabase_auth-2.27.0-py3-none-any.whl.metadata (6.4 kB)
Collecting postgrest==2.27.0 (from supabase->-r requirements.txt (line 8))
  Downloading postgrest-2.27.0-py3-none-any.whl.metadata (3.4 kB)
Collecting httpx<0.29,>=0.26 (from supabase->-r requirements.txt (line 8))
  Downloading httpx-0.28.1-py3-none-any.whl.metadata (7.1 kB)
Collecting yarl>=1.22.0 (from supabase->-r requirements.txt (line 8))
  Downloading yarl-1.22.0-cp313-cp313-manylinux2014_x86_64.manylinux_2_17_x86_64.manylinux_2_28_x86_64.whl.metadata (75 kB)
Collecting deprecation>=2.1.0 (from postgrest==2.27.0->supabase->-r requirements.txt (line 8))
  Downloading deprecation-2.1.0-py2.py3-none-any.whl.metadata (4.6 kB)
Collecting websockets<16,>=11 (from realtime==2.27.0->supabase->-r requirements.txt (line 8))
  Downloading websockets-15.0.1-cp313-cp313-manylinux_2_5_x86_64.manylinux1_x86_64.manylinux_2_17_x86_64.manylinux2014_x86_64.whl.metadata (6.8 kB)
Collecting pyiceberg>=0.10.0 (from storage3==2.27.0->supabase->-r requirements.txt (line 8))
  Downloading pyiceberg-0.10.0.tar.gz (842 kB)
     ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 842.6/842.6 kB 26.0 MB/s eta 0:00:00
  Installing build dependencies: started
  Installing build dependencies: finished with status 'done'
  Getting requirements to build wheel: started
  Getting requirements to build wheel: finished with status 'done'
  Preparing metadata (pyproject.toml): started
  Preparing metadata (pyproject.toml): finished with status 'done'
Collecting pyjwt>=2.10.1 (from pyjwt[crypto]>=2.10.1->supabase-auth==2.27.0->supabase->-r requirements.txt (line 8))
  Downloading PyJWT-2.10.1-py3-none-any.whl.metadata (4.0 kB)
Collecting strenum>=0.4.15 (from supabase-functions==2.27.0->supabase->-r requirements.txt (line 8))
  Downloading StrEnum-0.4.15-py3-none-any.whl.metadata (5.3 kB)
Collecting httpcore==1.* (from httpx<0.29,>=0.26->supabase->-r requirements.txt (line 8))
  Downloading httpcore-1.0.9-py3-none-any.whl.metadata (21 kB)
Collecting h2<5,>=3 (from httpx[http2]<0.29,>=0.26->postgrest==2.27.0->supabase->-r requirements.txt (line 8))
  Downloading h2-4.3.0-py3-none-any.whl.metadata (5.1 kB)
Collecting hyperframe<7,>=6.1 (from h2<5,>=3->httpx[http2]<0.29,>=0.26->postgrest==2.27.0->supabase->-r requirements.txt (line 8))
  Downloading hyperframe-6.1.0-py3-none-any.whl.metadata (4.3 kB)
Collecting hpack<5,>=4.1 (from h2<5,>=3->httpx[http2]<0.29,>=0.26->postgrest==2.27.0->supabase->-r requirements.txt (line 8))
  Downloading hpack-4.1.0-py3-none-any.whl.metadata (4.6 kB)
Collecting packaging (from deprecation>=2.1.0->postgrest==2.27.0->supabase->-r requirements.txt (line 8))
  Downloading packaging-25.0-py3-none-any.whl.metadata (3.3 kB)
Collecting cachetools<7.0,>=5.5 (from pyiceberg>=0.10.0->storage3==2.27.0->supabase->-r requirements.txt (line 8))
  Downloading cachetools-6.2.4-py3-none-any.whl.metadata (5.6 kB)
Collecting fsspec>=2023.1.0 (from pyiceberg>=0.10.0->storage3==2.27.0->supabase->-r requirements.txt (line 8))
  Downloading fsspec-2025.12.0-py3-none-any.whl.metadata (10 kB)
Collecting mmh3<6.0.0,>=4.0.0 (from pyiceberg>=0.10.0->storage3==2.27.0->supabase->-r requirements.txt (line 8))
  Downloading mmh3-5.2.0-cp313-cp313-manylinux1_x86_64.manylinux_2_28_x86_64.manylinux_2_5_x86_64.whl.metadata (14 kB)
Collecting pyparsing<4.0.0,>=3.1.0 (from pyiceberg>=0.10.0->storage3==2.27.0->supabase->-r requirements.txt (line 8))
  Downloading pyparsing-3.3.0-py3-none-any.whl.metadata (5.6 kB)
Collecting pyroaring<2.0.0,>=1.0.0 (from pyiceberg>=0.10.0->storage3==2.27.0->supabase->-r requirements.txt (line 8))
  Downloading pyroaring-1.0.3-cp313-cp313-manylinux_2_17_x86_64.manylinux2014_x86_64.whl.metadata (10 kB)
Collecting rich<15.0.0,>=10.11.0 (from pyiceberg>=0.10.0->storage3==2.27.0->supabase->-r requirements.txt (line 8))
  Downloading rich-14.2.0-py3-none-any.whl.metadata (18 kB)
Collecting sortedcontainers==2.4.0 (from pyiceberg>=0.10.0->storage3==2.27.0->supabase->-r requirements.txt (line 8))
  Downloading sortedcontainers-2.4.0-py2.py3-none-any.whl.metadata (10 kB)
Collecting strictyaml<2.0.0,>=1.7.0 (from pyiceberg>=0.10.0->storage3==2.27.0->supabase->-r requirements.txt (line 8))
  Downloading strictyaml-1.7.3-py3-none-any.whl.metadata (11 kB)
Collecting tenacity<10.0.0,>=8.2.3 (from pyiceberg>=0.10.0->storage3==2.27.0->supabase->-r requirements.txt (line 8))
  Downloading tenacity-9.1.2-py3-none-any.whl.metadata (1.2 kB)
Collecting markdown-it-py>=2.2.0 (from rich<15.0.0,>=10.11.0->pyiceberg>=0.10.0->storage3==2.27.0->supabase->-r requirements.txt (line 8))
  Downloading markdown_it_py-4.0.0-py3-none-any.whl.metadata (7.3 kB)
Collecting pygments<3.0.0,>=2.13.0 (from rich<15.0.0,>=10.11.0->pyiceberg>=0.10.0->storage3==2.27.0->supabase->-r requirements.txt (line 8))
  Downloading pygments-2.19.2-py3-none-any.whl.metadata (2.5 kB)
Collecting python-dateutil>=2.6.0 (from strictyaml<2.0.0,>=1.7.0->pyiceberg>=0.10.0->storage3==2.27.0->supabase->-r requirements.txt (line 8))
  Downloading python_dateutil-2.9.0.post0-py2.py3-none-any.whl.metadata (8.4 kB)
Collecting mdurl~=0.1 (from markdown-it-py>=2.2.0->rich<15.0.0,>=10.11.0->pyiceberg>=0.10.0->storage3==2.27.0->supabase->-r requirements.txt (line 8))
  Downloading mdurl-0.1.2-py3-none-any.whl.metadata (1.6 kB)
Collecting cryptography>=3.4.0 (from pyjwt[crypto]>=2.10.1->supabase-auth==2.27.0->supabase->-r requirements.txt (line 8))
  Downloading cryptography-46.0.3-cp311-abi3-manylinux_2_34_x86_64.whl.metadata (5.7 kB)
Collecting cffi>=2.0.0 (from cryptography>=3.4.0->pyjwt[crypto]>=2.10.1->supabase-auth==2.27.0->supabase->-r requirements.txt (line 8))
  Downloading cffi-2.0.0-cp313-cp313-manylinux2014_x86_64.manylinux_2_17_x86_64.whl.metadata (2.6 kB)
Collecting pycparser (from cffi>=2.0.0->cryptography>=3.4.0->pyjwt[crypto]>=2.10.1->supabase-auth==2.27.0->supabase->-r requirements.txt (line 8))
  Downloading pycparser-2.23-py3-none-any.whl.metadata (993 bytes)
Collecting six>=1.5 (from python-dateutil>=2.6.0->strictyaml<2.0.0,>=1.7.0->pyiceberg>=0.10.0->storage3==2.27.0->supabase->-r requirements.txt (line 8))
  Downloading six-1.17.0-py2.py3-none-any.whl.metadata (1.7 kB)
Collecting multidict>=4.0 (from yarl>=1.22.0->supabase->-r requirements.txt (line 8))
  Downloading multidict-6.7.0-cp313-cp313-manylinux2014_x86_64.manylinux_2_17_x86_64.manylinux_2_28_x86_64.whl.metadata (5.3 kB)
Collecting propcache>=0.2.1 (from yarl>=1.22.0->supabase->-r requirements.txt (line 8))
  Downloading propcache-0.4.1-cp313-cp313-manylinux2014_x86_64.manylinux_2_17_x86_64.manylinux_2_28_x86_64.whl.metadata (13 kB)
Downloading fastapi-0.127.0-py3-none-any.whl (112 kB)
Downloading starlette-0.50.0-py3-none-any.whl (74 kB)
Downloading anyio-4.12.0-py3-none-any.whl (113 kB)
Downloading uvicorn-0.40.0-py3-none-any.whl (68 kB)
Downloading pydantic-2.12.5-py3-none-any.whl (463 kB)
Downloading pydantic_core-2.41.5-cp313-cp313-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (2.1 MB)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 2.1/2.1 MB 65.6 MB/s eta 0:00:00
Downloading python_multipart-0.0.21-py3-none-any.whl (24 kB)
Downloading python_dotenv-1.2.1-py3-none-any.whl (21 kB)
Downloading feedparser-6.0.12-py3-none-any.whl (81 kB)
Downloading requests-2.32.5-py3-none-any.whl (64 kB)
Downloading charset_normalizer-3.4.4-cp313-cp313-manylinux2014_x86_64.manylinux_2_17_x86_64.manylinux_2_28_x86_64.whl (153 kB)
Downloading idna-3.11-py3-none-any.whl (71 kB)
Downloading urllib3-2.6.2-py3-none-any.whl (131 kB)
Downloading supabase-2.27.0-py3-none-any.whl (16 kB)
Downloading postgrest-2.27.0-py3-none-any.whl (21 kB)
Downloading realtime-2.27.0-py3-none-any.whl (22 kB)
Downloading storage3-2.27.0-py3-none-any.whl (27 kB)
Downloading supabase_auth-2.27.0-py3-none-any.whl (48 kB)
Downloading supabase_functions-2.27.0-py3-none-any.whl (8.5 kB)
Downloading httpx-0.28.1-py3-none-any.whl (73 kB)
Downloading httpcore-1.0.9-py3-none-any.whl (78 kB)
Downloading h2-4.3.0-py3-none-any.whl (61 kB)
Downloading hpack-4.1.0-py3-none-any.whl (34 kB)
Downloading hyperframe-6.1.0-py3-none-any.whl (13 kB)
Downloading websockets-15.0.1-cp313-cp313-manylinux_2_5_x86_64.manylinux1_x86_64.manylinux_2_17_x86_64.manylinux2014_x86_64.whl (182 kB)
Downloading annotated_doc-0.0.4-py3-none-any.whl (5.3 kB)
Downloading annotated_types-0.7.0-py3-none-any.whl (13 kB)
Downloading certifi-2025.11.12-py3-none-any.whl (159 kB)
Downloading click-8.3.1-py3-none-any.whl (108 kB)
Downloading deprecation-2.1.0-py2.py3-none-any.whl (11 kB)
Downloading h11-0.16.0-py3-none-any.whl (37 kB)
Downloading sortedcontainers-2.4.0-py2.py3-none-any.whl (29 kB)
Downloading cachetools-6.2.4-py3-none-any.whl (11 kB)
Downloading mmh3-5.2.0-cp313-cp313-manylinux1_x86_64.manylinux_2_28_x86_64.manylinux_2_5_x86_64.whl (103 kB)
Downloading pyparsing-3.3.0-py3-none-any.whl (121 kB)
Downloading pyroaring-1.0.3-cp313-cp313-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (2.1 MB)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 2.1/2.1 MB 18.1 MB/s eta 0:00:00
Downloading rich-14.2.0-py3-none-any.whl (243 kB)
Downloading pygments-2.19.2-py3-none-any.whl (1.2 MB)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 1.2/1.2 MB 14.3 MB/s eta 0:00:00
Downloading strictyaml-1.7.3-py3-none-any.whl (123 kB)
Downloading tenacity-9.1.2-py3-none-any.whl (28 kB)
Downloading fsspec-2025.12.0-py3-none-any.whl (201 kB)
Downloading markdown_it_py-4.0.0-py3-none-any.whl (87 kB)
Downloading mdurl-0.1.2-py3-none-any.whl (10.0 kB)
Downloading PyJWT-2.10.1-py3-none-any.whl (22 kB)
Downloading cryptography-46.0.3-cp311-abi3-manylinux_2_34_x86_64.whl (4.5 MB)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 4.5/4.5 MB 35.2 MB/s eta 0:00:00
Downloading cffi-2.0.0-cp313-cp313-manylinux2014_x86_64.manylinux_2_17_x86_64.whl (219 kB)
Downloading python_dateutil-2.9.0.post0-py2.py3-none-any.whl (229 kB)
Downloading six-1.17.0-py2.py3-none-any.whl (11 kB)
Downloading StrEnum-0.4.15-py3-none-any.whl (8.9 kB)
Downloading typing_extensions-4.15.0-py3-none-any.whl (44 kB)
Downloading typing_inspection-0.4.2-py3-none-any.whl (14 kB)
Downloading yarl-1.22.0-cp313-cp313-manylinux2014_x86_64.manylinux_2_17_x86_64.manylinux_2_28_x86_64.whl (377 kB)
Downloading multidict-6.7.0-cp313-cp313-manylinux2014_x86_64.manylinux_2_17_x86_64.manylinux_2_28_x86_64.whl (254 kB)
Downloading propcache-0.4.1-cp313-cp313-manylinux2014_x86_64.manylinux_2_17_x86_64.manylinux_2_28_x86_64.whl (204 kB)
Downloading packaging-25.0-py3-none-any.whl (66 kB)
Downloading pycparser-2.23-py3-none-any.whl (118 kB)
Building wheels for collected packages: pyiceberg, sgmllib3k
  Building wheel for pyiceberg (pyproject.toml): started
  Building wheel for pyiceberg (pyproject.toml): finished with status 'done'
  Created wheel for pyiceberg: filename=pyiceberg-0.10.0-cp313-cp313-manylinux_2_36_x86_64.whl size=809210 sha256=25b56d486644632b0d2220c70e3f4b6ed761dbe9eac6cfec79996158dff9867d
  Stored in directory: /opt/render/.cache/wheels/94/e1/ad/72718f6a4b508a4dcd74f62431dc44240ca3518c3837f58600
  Building wheel for sgmllib3k (pyproject.toml): started
  Building wheel for sgmllib3k (pyproject.toml): finished with status 'done'
  Created wheel for sgmllib3k: filename=sgmllib3k-1.0.0-py3-none-any.whl size=6089 sha256=e446a49e8b02315ed46b5b5430a2c2a4e4bffda5915fdd570d96f2b06494fc5d
  Stored in directory: /opt/render/.cache/wheels/3d/4d/ef/37cdccc18d6fd7e0dd7817dcdf9146d4d6789c32a227a28134
Successfully built pyiceberg sgmllib3k
Installing collected packages: strenum, sortedcontainers, sgmllib3k, pyroaring, websockets, urllib3, typing-extensions, tenacity, six, python-multipart, python-dotenv, pyparsing, pyjwt, pygments, pycparser, propcache, packaging, multidict, mmh3, mdurl, idna, hyperframe, hpack, h11, fsspec, feedparser, click, charset_normalizer, certifi, cachetools, annotated-types, annotated-doc, yarl, uvicorn, typing-inspection, requests, python-dateutil, pydantic-core, markdown-it-py, httpcore, h2, deprecation, cffi, anyio, strictyaml, starlette, rich, pydantic, httpx, cryptography, realtime, pyiceberg, fastapi, supabase-functions, supabase-auth, storage3, postgrest, supabase
Successfully installed annotated-doc-0.0.4 annotated-types-0.7.0 anyio-4.12.0 cachetools-6.2.4 certifi-2025.11.12 cffi-2.0.0 charset_normalizer-3.4.4 click-8.3.1 cryptography-46.0.3 deprecation-2.1.0 fastapi-0.127.0 feedparser-6.0.12 fsspec-2025.12.0 h11-0.16.0 h2-4.3.0 hpack-4.1.0 httpcore-1.0.9 httpx-0.28.1 hyperframe-6.1.0 idna-3.11 markdown-it-py-4.0.0 mdurl-0.1.2 mmh3-5.2.0 multidict-6.7.0 packaging-25.0 postgrest-2.27.0 propcache-0.4.1 pycparser-2.23 pydantic-2.12.5 pydantic-core-2.41.5 pygments-2.19.2 pyiceberg-0.10.0 pyjwt-2.10.1 pyparsing-3.3.0 pyroaring-1.0.3 python-dateutil-2.9.0.post0 python-dotenv-1.2.1 python-multipart-0.0.21 realtime-2.27.0 requests-2.32.5 rich-14.2.0 sgmllib3k-1.0.0 six-1.17.0 sortedcontainers-2.4.0 starlette-0.50.0 storage3-2.27.0 strenum-0.4.15 strictyaml-1.7.3 supabase-2.27.0 supabase-auth-2.27.0 supabase-functions-2.27.0 tenacity-9.1.2 typing-extensions-4.15.0 typing-inspection-0.4.2 urllib3-2.6.2 uvicorn-0.40.0 websockets-15.0.1 yarl-1.22.0
[notice] A new release of pip is available: 25.1.1 -> 25.3
[notice] To update, run: pip install --upgrade pip
==> Uploading build...
==> Uploaded in 14.5s. Compression took 4.7s
==> Build successful 🎉
==> Setting WEB_CONCURRENCY=1 by default, based on available CPUs in the instance
==> Deploying...
==> Running 'uvicorn app.main:app --host 0.0.0.0 --port $PORT'
ERROR:    Error loading ASGI app. Could not import module "app.main".
==> Exited with status 1
==> Common ways to troubleshoot your deploy: https://render.com/docs/troubleshooting-deploys
==> Running 'uvicorn app.main:app --host 0.0.0.0 --port $PORT'
ERROR:    Error loading ASGI app. Could not import module "app.main".