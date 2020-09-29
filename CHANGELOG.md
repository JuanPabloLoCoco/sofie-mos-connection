# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [0.9.0](https://github.com/nrkno/tv-automation-mos-connection/compare/0.8.10...0.9.0) (2020-09-29)


### ⚠ BREAKING CHANGES

* drop support for node 8

### Features

* drop support for node 8 ([d42e556](https://github.com/nrkno/tv-automation-mos-connection/commit/d42e55601f1a6b5e3d5b8d12829ec88e3f0a9eb8))
* drop support for node 8 ([9a2d44c](https://github.com/nrkno/tv-automation-mos-connection/commit/9a2d44c07c6803a09385f30864035cfec708f272))

### [0.8.10](https://github.com/nrkno/tv-automation-mos-connection/compare/0.8.9...0.8.10) (2020-03-24)


### Features

* **ci:** optionally skip the audit [skip ci] ([df946f2](https://github.com/nrkno/tv-automation-mos-connection/commit/df946f21d21d45b186ae70bea5b71f3918e2b50d))
* add prerelease flow [publish] ([1acec89](https://github.com/nrkno/tv-automation-mos-connection/commit/1acec894f5902a751b07450d19beb0ed6fb22baa))


### Bug Fixes

* start and duration can be 0 ([b5f47a5](https://github.com/nrkno/tv-automation-mos-connection/commit/b5f47a52c69fbad41a840ea29688f0bcaf41b1e4))

### [0.8.9](https://github.com/nrkno/tv-automation-mos-connection/compare/0.8.8...0.8.9) (2020-01-24)


### Bug Fixes

* A private static does not set a return value when compiled, which gives errors downstream. ([44d8b65](https://github.com/nrkno/tv-automation-mos-connection/commit/44d8b6562672df671818d8ce6c2f88aa7d0ac981))

### [0.8.8](https://github.com/nrkno/tv-automation-mos-connection/compare/0.8.7...0.8.8) (2020-01-24)


### Bug Fixes

* corrected <objMetadataPath> name (it had a space in it) ([9a8dbe0](https://github.com/nrkno/tv-automation-mos-connection/commit/9a8dbe068769f10ef72e3cb8af9d2d7e5b85d14b))
* update xmlBuilder and typescript dependency ([cb5e985](https://github.com/nrkno/tv-automation-mos-connection/commit/cb5e985c6d424c4d18a64d6dc0fe23874cf18ef1))
* wrap all xml.ele() into addTextElement() in order to make sure that what's added is a string (through .toString() ). ([e56a75e](https://github.com/nrkno/tv-automation-mos-connection/commit/e56a75ecbdb34adc42109f250f0592daf433e259))

### [0.8.7](https://github.com/nrkno/tv-automation-mos-connection/compare/0.8.6...0.8.7) (2020-01-19)


### Bug Fixes

* resolve an issue with a duplicated type MosDuration ([60de1cc](https://github.com/nrkno/tv-automation-mos-connection/commit/60de1cc071b834a304381faa961b3a9b9bfc9643))

### [0.8.6](https://github.com/nrkno/tv-automation-mos-connection/compare/0.8.5...0.8.6) (2020-01-08)


### Features

* add dontUseQueryPort option, to suppress some logging output ([41ca963](https://github.com/nrkno/tv-automation-mos-connection/commit/41ca9633a976de4199e0556ec0b6d2d977408ab1))
* update ci to run for node 8,10,12 ([858ee35](https://github.com/nrkno/tv-automation-mos-connection/commit/858ee356d474b488c7c9d5f0ab5a64ec548cc80c))

### [0.8.5](https://github.com/nrkno/tv-automation-mos-connection/compare/0.8.4...0.8.5) (2019-10-25)

### [0.8.4](https://github.com/nrkno/tv-automation-mos-connection/compare/0.8.3...0.8.4) (2019-08-20)


### Bug Fixes

* types/xmlbuilder must be a dependency for the library to work properly ([04f9181](https://github.com/nrkno/tv-automation-mos-connection/commit/04f9181))

### [0.8.3](https://github.com/nrkno/tv-automation-mos-connection/compare/0.8.2...0.8.3) (2019-08-01)


### Bug Fixes

* downgrade gh-pages dep, due to issues with it. ([1d852a9](https://github.com/nrkno/tv-automation-mos-connection/commit/1d852a9))
* update dependencies, after security audit ([13b8e41](https://github.com/nrkno/tv-automation-mos-connection/commit/13b8e41))

### [0.8.2](https://github.com/nrkno/tv-automation-mos-connection/compare/0.8.1...0.8.2) (2019-06-07)



## [0.8.1](https://github.com/nrkno/tv-automation-mos-connection/compare/0.8.0...0.8.1) (2019-04-11)


### Bug Fixes

* don't send heartbeat on query port ([fd1219f](https://github.com/nrkno/tv-automation-mos-connection/commit/fd1219f))



<a name="0.6.6"></a>
## [0.6.6](https://github.com/nrkno/tv-automation-mos-connection/compare/0.6.5...0.6.6) (2019-01-29)


### Bug Fixes

* techDescription can be a string (Merge branch 'develop') ([d1f057f](https://github.com/nrkno/tv-automation-mos-connection/commit/d1f057f))



<a name="0.6.5"></a>
## [0.6.5](https://github.com/nrkno/tv-automation-mos-connection/compare/0.6.4...0.6.5) (2018-12-11)


### Bug Fixes

* add exports ([918f486](https://github.com/nrkno/tv-automation-mos-connection/commit/918f486))
* add missing dependency ([22089f9](https://github.com/nrkno/tv-automation-mos-connection/commit/22089f9))



<a name="0.6.4"></a>
## [0.6.4](https://github.com/nrkno/tv-automation-mos-connection/compare/0.6.3...0.6.4) (2018-11-16)


### Bug Fixes

* new MosString from another MosString ([f694623](https://github.com/nrkno/tv-automation-mos-connection/commit/f694623))
* refactor MosString128 & add tests ([0839e10](https://github.com/nrkno/tv-automation-mos-connection/commit/0839e10))



<a name="0.6.3"></a>
## [0.6.3](https://github.com/nrkno/tv-automation-mos-connection/compare/0.6.2...0.6.3) (2018-11-06)


### Bug Fixes

* method called with wrong context ([4768757](https://github.com/nrkno/tv-automation-mos-connection/commit/4768757))
* proper handling of empty string ([22d8da6](https://github.com/nrkno/tv-automation-mos-connection/commit/22d8da6))



<a name="0.6.2"></a>
## [0.6.2](https://github.com/nrkno/tv-automation-mos-connection/compare/0.6.1...0.6.2) (2018-10-11)


### Bug Fixes

* added _lingeringMessage, to allow heartbeat replies to come through, even after a handOver ([e515560](https://github.com/nrkno/tv-automation-mos-connection/commit/e515560))



<a name="0.6.1"></a>
## [0.6.1](https://github.com/nrkno/tv-automation-mos-connection/compare/0.6.0...0.6.1) (2018-10-11)



<a name="0.6.0"></a>
# [0.6.0](https://github.com/nrkno/tv-automation-mos-connection/compare/0.5.6...0.6.0) (2018-10-10)


### Features

* set debug flag dynamically ([51c3718](https://github.com/nrkno/tv-automation-mos-connection/commit/51c3718))



<a name="0.5.6"></a>
## [0.5.6](https://github.com/nrkno/tv-automation-mos-connection/compare/0.5.5...0.5.6) (2018-09-25)


### Bug Fixes

* case sensitive import ([bc636b6](https://github.com/nrkno/tv-automation-mos-connection/commit/bc636b6))



<a name="0.5.5"></a>
## [0.5.5](https://github.com/nrkno/tv-automation-mos-connection/compare/0.5.4...0.5.5) (2018-09-04)



<a name="0.5.4"></a>
## [0.5.4](https://github.com/nrkno/tv-automation-mos-connection/compare/0.5.3...0.5.4) (2018-08-28)


### Bug Fixes

* missing properties ObjDur and ObjTB ([1f6f564](https://github.com/nrkno/tv-automation-mos-connection/commit/1f6f564))



<a name="0.5.3"></a>
## [0.5.3](https://github.com/nrkno/tv-automation-mos-connection/compare/0.5.2...0.5.3) (2018-08-21)


### Bug Fixes

* proper bubbling of error & warning events ([5d14e55](https://github.com/nrkno/tv-automation-mos-connection/commit/5d14e55))



<a name="0.5.2"></a>
## [0.5.2](https://github.com/nrkno/tv-automation-mos-connection/compare/0.5.1...0.5.2) (2018-08-20)


### Bug Fixes

* parse last chunk of xml data ([0e54f03](https://github.com/nrkno/tv-automation-mos-connection/commit/0e54f03))



<a name="0.5.1"></a>
## [0.5.1](https://github.com/nrkno/tv-automation-mos-connection/compare/0.5.0...0.5.1) (2018-08-17)


### Bug Fixes

* mosTime: implemented change from default local to UTC ([b93b8e5](https://github.com/nrkno/tv-automation-mos-connection/commit/b93b8e5))
* updated mosTime tests: default timezone is UTC, not local ([be158a4](https://github.com/nrkno/tv-automation-mos-connection/commit/be158a4))



<a name="0.5.0"></a>
# [0.5.0](https://github.com/nrkno/tv-automation-mos-connection/compare/0.4.0...0.5.0) (2018-08-17)


### Bug Fixes

* 0 reconnects implies infinite reconnects ([7749dc3](https://github.com/nrkno/tv-automation-mos-connection/commit/7749dc3))
* extra guards in switching logic ([a66584e](https://github.com/nrkno/tv-automation-mos-connection/commit/a66584e))
* reconnect timer reset ([970da0d](https://github.com/nrkno/tv-automation-mos-connection/commit/970da0d))
* roAck may contain error regarding buddy server ([4ef32ff](https://github.com/nrkno/tv-automation-mos-connection/commit/4ef32ff))
* timeout messages even before being sent ([39ba705](https://github.com/nrkno/tv-automation-mos-connection/commit/39ba705))


### Features

* failover prototype ([2f979e6](https://github.com/nrkno/tv-automation-mos-connection/commit/2f979e6))
* failover upon NACK: Main Available ([5bb64e4](https://github.com/nrkno/tv-automation-mos-connection/commit/5bb64e4))
* option to enable offspec failover behaviour ([86f7b0d](https://github.com/nrkno/tv-automation-mos-connection/commit/86f7b0d))



<a name="0.4.0"></a>
# [0.4.0](https://github.com/nrkno/tv-automation-mos-connection/compare/0.3.17...0.4.0) (2018-08-03)


### Bug Fixes

* changes in parser when data structures has changed ([4491b8f](https://github.com/nrkno/tv-automation-mos-connection/commit/4491b8f))
* metadata tag might be empty ([897df5c](https://github.com/nrkno/tv-automation-mos-connection/commit/897df5c))
* mosString, flat attributes and removed usage of xml2json ([92bbe41](https://github.com/nrkno/tv-automation-mos-connection/commit/92bbe41))
* single child xml data ([b3dc170](https://github.com/nrkno/tv-automation-mos-connection/commit/b3dc170))
* tests ([cdea898](https://github.com/nrkno/tv-automation-mos-connection/commit/cdea898))
* update xml2Body to retain order ([681fd68](https://github.com/nrkno/tv-automation-mos-connection/commit/681fd68))
* xml2js: changed internal structure to $name & $type, instead of name & type, to avoid collisions ([1706185](https://github.com/nrkno/tv-automation-mos-connection/commit/1706185))


### Features

* added dependency on xml-js ([f2ac082](https://github.com/nrkno/tv-automation-mos-connection/commit/f2ac082))
* keep order of tags inside some fields ([95fe1f8](https://github.com/nrkno/tv-automation-mos-connection/commit/95fe1f8))
* tweaked the parsing, got the test to pass ([ec9c3bd](https://github.com/nrkno/tv-automation-mos-connection/commit/ec9c3bd))



<a name="0.3.17"></a>
## [0.3.17](https://github.com/nrkno/tv-automation-mos-connection/compare/0.3.16...0.3.17) (2018-06-15)



<a name="0.3.16"></a>
## [0.3.16](https://github.com/nrkno/tv-automation-mos-connection/compare/0.3.15...0.3.16) (2018-06-13)



<a name="0.3.15"></a>
## [0.3.15](https://github.com/nrkno/tv-automation-mos-connection/compare/0.3.14...0.3.15) (2018-06-12)



<a name="0.3.14"></a>
## [0.3.14](https://github.com/nrkno/tv-automation-mos-connection/compare/0.3.13...0.3.14) (2018-06-11)



<a name="0.3.13"></a>
## [0.3.13](https://github.com/nrkno/tv-automation-mos-connection/compare/0.3.12...0.3.13) (2018-06-11)


### Bug Fixes

* **mosDuration:**  fixes bug with mosDurations displaying wrong values once consumed ([c558777](https://github.com/nrkno/tv-automation-mos-connection/commit/c558777))



<a name="0.3.12"></a>
## [0.3.12](https://github.com/nrkno/tv-automation-mos-connection/compare/0.3.11...0.3.12) (2018-06-05)


### Bug Fixes

* rename in readme ([69dd953](https://github.com/nrkno/tv-automation-mos-connection/commit/69dd953))



<a name="0.3.11"></a>
## [0.3.11](https://github.com/nrkno/tv-automation-mos-connection/compare/0.3.10...0.3.11) (2018-06-05)


### Bug Fixes

* improve changes.md ([3dc5eaf](https://github.com/nrkno/tv-automation-mos-connection/commit/3dc5eaf))
* use generic project name in config. Add more steps to do ([773c469](https://github.com/nrkno/tv-automation-mos-connection/commit/773c469))



<a name="0.3.10"></a>
## [0.3.10](https://github.com/nrkno/tv-automation-mos-connection/compare/0.3.9...0.3.10) (2018-06-01)



<a name="0.3.9"></a>
## [0.3.9](https://github.com/nrkno/tv-automation-mos-connection/compare/0.3.8...0.3.9) (2018-06-01)



<a name="0.3.8"></a>
## [0.3.8](https://github.com/nrkno/tv-automation-mos-connection/compare/0.3.7...0.3.8) (2018-05-31)


### Bug Fixes

* remove dist from git repo ([0607d24](https://github.com/nrkno/tv-automation-mos-connection/commit/0607d24))
* update documentation on scripts ([261ae04](https://github.com/nrkno/tv-automation-mos-connection/commit/261ae04))



<a name="0.3.7"></a>
## [0.3.7](https://github.com/nrkno/tv-automation-mos-connection/compare/0.3.6...0.3.7) (2018-05-31)


### Bug Fixes

* correction to license ([3667644](https://github.com/nrkno/tv-automation-mos-connection/commit/3667644))



<a name="0.3.6"></a>
## [0.3.6](https://github.com/nrkno/tv-automation-mos-connection/compare/0.3.5...0.3.6) (2018-05-31)


### Bug Fixes

* **mosDuration:**  fixes bug with mosDurations displaying wrong values once consumed ([8a8af4e](https://github.com/nrkno/tv-automation-mos-connection/commit/8a8af4e))



<a name="0.3.5"></a>
## [0.3.5](https://github.com/nrkno/tv-automation-mos-connection/compare/0.3.4...0.3.5) (2018-05-30)


### Bug Fixes

* add more changes to the list ([042dafb](https://github.com/nrkno/tv-automation-mos-connection/commit/042dafb))



<a name="0.3.4"></a>
## [0.3.4](https://github.com/nrkno/tv-automation-mos-connection/compare/0.3.3...0.3.4) (2018-05-30)


### Bug Fixes

* add more to gitignore ([6ac3591](https://github.com/nrkno/tv-automation-mos-connection/commit/6ac3591))
* remove a bunch of junk from npm releases, also add important files? ([90340c1](https://github.com/nrkno/tv-automation-mos-connection/commit/90340c1))
* remove docs from non-gh-pages branchs ([fb7fdfc](https://github.com/nrkno/tv-automation-mos-connection/commit/fb7fdfc))
* remove travis.yml ([6f31ff3](https://github.com/nrkno/tv-automation-mos-connection/commit/6f31ff3))



<a name="0.3.3"></a>
## [0.3.3](https://github.com/nrkno/tv-automation-mos-connection/compare/0.3.2...0.3.3) (2018-05-30)


### Bug Fixes

* remove persist to workspace on last step ([6c075a9](https://github.com/nrkno/tv-automation-mos-connection/commit/6c075a9))



<a name="0.3.2"></a>
## [0.3.2](https://github.com/nrkno/tv-automation-mos-connection/compare/0.3.1...0.3.2) (2018-05-30)


### Bug Fixes

* yarn timeout ([162a7dd](https://github.com/nrkno/tv-automation-mos-connection/commit/162a7dd))



<a name="0.3.1"></a>
## [0.3.1](https://github.com/nrkno/tv-automation-mos-connection/compare/0.3.0...0.3.1) (2018-05-30)


### Bug Fixes

* missed rename ([9f550a4](https://github.com/nrkno/tv-automation-mos-connection/commit/9f550a4))
* rename steps, workflows, and jobs ([5db0434](https://github.com/nrkno/tv-automation-mos-connection/commit/5db0434))
* typo in send coverage command ([92bb8a2](https://github.com/nrkno/tv-automation-mos-connection/commit/92bb8a2))
* yet another typo in config ([25e4df8](https://github.com/nrkno/tv-automation-mos-connection/commit/25e4df8))
* yet another typoI feel bad. This time I am 87% certain it will work ([004a0ff](https://github.com/nrkno/tv-automation-mos-connection/commit/004a0ff))



<a name="0.3.0"></a>
# [0.3.0](https://github.com/nrkno/tv-automation-mos-connection/compare/0.2.0...0.3.0) (2018-05-30)


### Bug Fixes

* add important change step ([1f7bb12](https://github.com/nrkno/tv-automation-mos-connection/commit/1f7bb12))
* clean out manual release commentsadd comment about yarn publish possibly failing for some users ([d2635f4](https://github.com/nrkno/tv-automation-mos-connection/commit/d2635f4))
* Remove incorrect guide in changes ([7b4a0a2](https://github.com/nrkno/tv-automation-mos-connection/commit/7b4a0a2))
* Remove manual release workflow ([49f110b](https://github.com/nrkno/tv-automation-mos-connection/commit/49f110b))
* run docs generation during CI test ([18729c1](https://github.com/nrkno/tv-automation-mos-connection/commit/18729c1))


### Features

* license check ([c47df39](https://github.com/nrkno/tv-automation-mos-connection/commit/c47df39))



<a name="0.2.0"></a>
# [0.2.0](https://github.com/nrkno/tv-automation-mos-connection/compare/0.1.0...0.2.0) (2018-05-26)


### Bug Fixes

* Add build status badge and documentation ([f97c8aa](https://github.com/nrkno/tv-automation-mos-connection/commit/f97c8aa))
* add suggested documentation on how to force a release to go out to NPM ([a85bcfb](https://github.com/nrkno/tv-automation-mos-connection/commit/a85bcfb))
* remove duplicate release code? ([0b385f7](https://github.com/nrkno/tv-automation-mos-connection/commit/0b385f7))


### Features

* adding auto-generated docs ([934be79](https://github.com/nrkno/tv-automation-mos-connection/commit/934be79))
* Renaming to tv-automation-mos-connection ([e885ea5](https://github.com/nrkno/tv-automation-mos-connection/commit/e885ea5))



<a name="0.1.0"></a>
# 0.1.0 (2018-05-26)


### Bug Fixes

* **Clean:** Removes unsused connectionManager.ts ([57cafd1](https://github.com/superflytv/mos-connection/commit/57cafd1))
* **ConnectionCinfig:** removed ports, as they are defined in the MOS protocol ([6e08047](https://github.com/superflytv/mos-connection/commit/6e08047))
* **Interface:** Makes Scope optional in MosExternalMetaData ([47fe63f](https://github.com/superflytv/mos-connection/commit/47fe63f))
* **MosConnection:** Confform config object and socket client ([fb584e6](https://github.com/superflytv/mos-connection/commit/fb584e6))
* wrong key ([e8f94fd](https://github.com/superflytv/mos-connection/commit/e8f94fd))
* **MosConnection:** typo ([fa977d2](https://github.com/superflytv/mos-connection/commit/fa977d2))
* activate codecoverage ([1adcfe3](https://github.com/superflytv/mos-connection/commit/1adcfe3))
* Add editorconfig for easier development ([2e839fc](https://github.com/superflytv/mos-connection/commit/2e839fc))
* add editorconfig for yaml files ([9ede55d](https://github.com/superflytv/mos-connection/commit/9ede55d))
* Add github.com to known_hosts ([ea92e8a](https://github.com/superflytv/mos-connection/commit/ea92e8a))
* added test for index, for full code coverage status ([6e3136d](https://github.com/superflytv/mos-connection/commit/6e3136d))
* always convert MosStrings to strings ([1ff977a](https://github.com/superflytv/mos-connection/commit/1ff977a))
* Block ds_stores from mac ([0a92fa9](https://github.com/superflytv/mos-connection/commit/0a92fa9))
* change from build to dist ([5408756](https://github.com/superflytv/mos-connection/commit/5408756))
* check for elementStat.element ([fba4819](https://github.com/superflytv/mos-connection/commit/fba4819))
* clean up specs ([183fabc](https://github.com/superflytv/mos-connection/commit/183fabc))
* Corrects wrongly named specs, and fixes compile error ([9d8ba44](https://github.com/superflytv/mos-connection/commit/9d8ba44))
* create .ssh-dir if not exists ([7cd219a](https://github.com/superflytv/mos-connection/commit/7cd219a))
* explicitly set coverage on cov command ([a82e12f](https://github.com/superflytv/mos-connection/commit/a82e12f))
* fixed tests ([558872b](https://github.com/superflytv/mos-connection/commit/558872b))
* ignore test files in compile output ([53be8db](https://github.com/superflytv/mos-connection/commit/53be8db))
* **spec:** Fixes iconv-related decoding bug in Jest context ([e8c4c65](https://github.com/superflytv/mos-connection/commit/e8c4c65))
* Initial src restructure ([a7fb3f2](https://github.com/superflytv/mos-connection/commit/a7fb3f2))
* manual release workflow ([6504bfd](https://github.com/superflytv/mos-connection/commit/6504bfd))
* missing chars in testdata + missing MosString on roCreate ([6f007d8](https://github.com/superflytv/mos-connection/commit/6f007d8))
* mosString128 from multiple types ([999bf6f](https://github.com/superflytv/mos-connection/commit/999bf6f))
* move tests to correct class ([73e46ff](https://github.com/superflytv/mos-connection/commit/73e46ff))
* onDelete test. onDelete works now ([5fc929c](https://github.com/superflytv/mos-connection/commit/5fc929c))
* re-add known_hosts statement ([f5a6682](https://github.com/superflytv/mos-connection/commit/f5a6682))
* re-added wrongly deleted file. ([86e38cc](https://github.com/superflytv/mos-connection/commit/86e38cc))
* relative path fix ([45b783c](https://github.com/superflytv/mos-connection/commit/45b783c))
* remove a couple of ts-ignore causing doc-gen issues ([ed3f217](https://github.com/superflytv/mos-connection/commit/ed3f217))
* remove incorrect job dependency ([b8c81ba](https://github.com/superflytv/mos-connection/commit/b8c81ba))
* Remove node-6 tests ([dd58459](https://github.com/superflytv/mos-connection/commit/dd58459))
* rename xml2ID to xml2IDs ([c970466](https://github.com/superflytv/mos-connection/commit/c970466))
* Resolve script problems ([e79677a](https://github.com/superflytv/mos-connection/commit/e79677a))
* Resolve tslint errors ([b52e5ba](https://github.com/superflytv/mos-connection/commit/b52e5ba))
* Restructure tsconfig and tests ([924f414](https://github.com/superflytv/mos-connection/commit/924f414))
* set correct node version ([a1eaaac](https://github.com/superflytv/mos-connection/commit/a1eaaac))
* Set coverage requirement to 100% ([f9d4bb1](https://github.com/superflytv/mos-connection/commit/f9d4bb1))
* set push-enabled ssh key, remove known_host statement ([c0867bb](https://github.com/superflytv/mos-connection/commit/c0867bb))
* set skip ci message on chore release ([33ff2b2](https://github.com/superflytv/mos-connection/commit/33ff2b2))
* Sets Profile 0 as mandatory, todo: add profile dependency resolution ([2ce96e3](https://github.com/superflytv/mos-connection/commit/2ce96e3))
* split xml2story & bugfix ([3640841](https://github.com/superflytv/mos-connection/commit/3640841))
* test mockClear ([183f7f7](https://github.com/superflytv/mos-connection/commit/183f7f7))
* typo ([f001e32](https://github.com/superflytv/mos-connection/commit/f001e32))
* updated yarn.lock ([bd97cd9](https://github.com/superflytv/mos-connection/commit/bd97cd9))
* Use the same mosID as in testdata ([c7a6fb8](https://github.com/superflytv/mos-connection/commit/c7a6fb8))
* **MosMessage:** Fixes ncsID and mosTime time format ([894250a](https://github.com/superflytv/mos-connection/commit/894250a))
* **mosString128:** Changed "set" to "string" member. Refactored validation ([8ea405c](https://github.com/superflytv/mos-connection/commit/8ea405c))
* **MosTime:** Fixes bug with time-offset parsing ([e453d18](https://github.com/superflytv/mos-connection/commit/e453d18))
* **spec:** 100% MORE fixed bug than previously ([cef7811](https://github.com/superflytv/mos-connection/commit/cef7811))
* **spec:** Fixes mosTime spec with local timezone ([dac5a28](https://github.com/superflytv/mos-connection/commit/dac5a28))


### Features

* **ConnectionConfig:** Adds profile validation for compliancy in profile combinations ([7bf7107](https://github.com/superflytv/mos-connection/commit/7bf7107))
* MosDevice onConnectionChange + getConnectionStatus ([3ddb270](https://github.com/superflytv/mos-connection/commit/3ddb270))
* **heatBeat:** Implemented heartbeat interface ([f280217](https://github.com/superflytv/mos-connection/commit/f280217))
* add ci and validate jobs ([6b4bb02](https://github.com/superflytv/mos-connection/commit/6b4bb02))
* add manual NPM deploy step ([1751712](https://github.com/superflytv/mos-connection/commit/1751712))
* Add vscode laucnh config for jest ([6a2f55f](https://github.com/superflytv/mos-connection/commit/6a2f55f))
* added basic MosConnection test ([97e2c4e](https://github.com/superflytv/mos-connection/commit/97e2c4e))
* added exclude mock-folder rule ([3fa4834](https://github.com/superflytv/mos-connection/commit/3fa4834))
* added export ([a0694f9](https://github.com/superflytv/mos-connection/commit/a0694f9))
* added interface for profile0 ([d585fbf](https://github.com/superflytv/mos-connection/commit/d585fbf))
* added mock for net.Socket ([5510e34](https://github.com/superflytv/mos-connection/commit/5510e34))
* added socket server mock and prepared for testing ([5e7c880](https://github.com/superflytv/mos-connection/commit/5e7c880))
* added test for messageId ([143dd13](https://github.com/superflytv/mos-connection/commit/143dd13))
* basic circleci integration ([f4c7da4](https://github.com/superflytv/mos-connection/commit/f4c7da4))
* dispose of NCSServerConnection + store callbacks on MosDevice ([3f9fb3b](https://github.com/superflytv/mos-connection/commit/3f9fb3b))
* getRunningOrder ([d4ebee6](https://github.com/superflytv/mos-connection/commit/d4ebee6))
* Implement mosAck ([3750e7e](https://github.com/superflytv/mos-connection/commit/3750e7e))
* implemented roRequestRunningorder ([7fb1945](https://github.com/superflytv/mos-connection/commit/7fb1945))
* insert item ([f52e55d](https://github.com/superflytv/mos-connection/commit/f52e55d))
* minor changes to data api, after closer look at the protocol ([91c0358](https://github.com/superflytv/mos-connection/commit/91c0358))
* new way of handling mosDevices ([4fabf15](https://github.com/superflytv/mos-connection/commit/4fabf15))
* onItemStatus ([f9039b2](https://github.com/superflytv/mos-connection/commit/f9039b2))
* onReplaceRunningOrder ([534db1d](https://github.com/superflytv/mos-connection/commit/534db1d))
* onROMoveItems ([0060204](https://github.com/superflytv/mos-connection/commit/0060204))
* onROMoveStories ([b0bae0f](https://github.com/superflytv/mos-connection/commit/b0bae0f))
* onROSwapItems ([3cb3818](https://github.com/superflytv/mos-connection/commit/3cb3818))
* onROSwapStories ([b20dcc1](https://github.com/superflytv/mos-connection/commit/b20dcc1))
* onRunningOrderStatus ([67a8bf8](https://github.com/superflytv/mos-connection/commit/67a8bf8))
* onStoryStatus ([20613aa](https://github.com/superflytv/mos-connection/commit/20613aa))
* parameter for messageID in MosMessage.prepare() ([c0a51c4](https://github.com/superflytv/mos-connection/commit/c0a51c4))
* replace stories & items ([f40f4d3](https://github.com/superflytv/mos-connection/commit/f40f4d3))
* roCreate ([8b8c477](https://github.com/superflytv/mos-connection/commit/8b8c477))
* roDelete ([8246bcb](https://github.com/superflytv/mos-connection/commit/8246bcb))
* roElementAction DELETE ([fcb0ef3](https://github.com/superflytv/mos-connection/commit/fcb0ef3))
* roMetadataReplace + metadata in testdata ([d58dad4](https://github.com/superflytv/mos-connection/commit/d58dad4))
* roStorySend ([4adfd4f](https://github.com/superflytv/mos-connection/commit/4adfd4f))
* Send heartbeats ([1889dd7](https://github.com/superflytv/mos-connection/commit/1889dd7))
* Started on support for multiple mosDevices ([46eefbf](https://github.com/superflytv/mos-connection/commit/46eefbf))
* store mosdevice + read chunks + parse xml ([1bee6c1](https://github.com/superflytv/mos-connection/commit/1bee6c1))
* **MosMessage:** Add Mos message structure and XML output ([3b213f5](https://github.com/superflytv/mos-connection/commit/3b213f5))
* stub for parser, WIP ([8b3497d](https://github.com/superflytv/mos-connection/commit/8b3497d))
* **Jest:** Adds spesific integratinTests that's excluded in normal unit testing ([824a02b](https://github.com/superflytv/mos-connection/commit/824a02b))
* **MosConnection:** Added buddy sockets ([6330775](https://github.com/superflytv/mos-connection/commit/6330775))
* **MosConnection:** Adds timeout logic for hearbeat triggering ([4d97f93](https://github.com/superflytv/mos-connection/commit/4d97f93))
* **MosConnection:** Implements actualt HeartBeat messages in heartbeat procedure ([2eae531](https://github.com/superflytv/mos-connection/commit/2eae531))
* **MosConnection:** Refactored connection organisation under Server/ServerPair (todo) structure. Lifetime management with registry handling and listeners. ([7e2c5df](https://github.com/superflytv/mos-connection/commit/7e2c5df))
* Update project structure ([1d88e62](https://github.com/superflytv/mos-connection/commit/1d88e62))
* **MosConnection:** Refactors MosConnection and re-implements profile support ([8d4c69a](https://github.com/superflytv/mos-connection/commit/8d4c69a))
* **mosSocketClient:**  rudimentary initial implementation of mosSocketClient ([21ca73c](https://github.com/superflytv/mos-connection/commit/21ca73c))
* **mosSocketServer:** rudimentary initial implementation of mosSocketServer ([af44c55](https://github.com/superflytv/mos-connection/commit/af44c55))
* **MosSocketServer:** Adds listener and dispose to socketserver ([7687eb6](https://github.com/superflytv/mos-connection/commit/7687eb6))
* **MosTime:** Adds support for Date-centric string formats and local time offsets. ([f771bbf](https://github.com/superflytv/mos-connection/commit/f771bbf))
* Very basic test-setup ([9bfa3b2](https://github.com/superflytv/mos-connection/commit/9bfa3b2))
