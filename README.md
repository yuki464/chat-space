# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|email|string|null: false, add_index:users, :email, unique: true|
|password|string|
### Association
- has-many :messages
- has-many :groups_users
- has-many :groups, through: :groups_users

## messageテーブル
|Column|Type|Options|
|------|----|-------|
|body|text| null:false
|image|string|
|group_id|string|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|
## Association
- belongs_to :user
- belongs_to :group


## groupsテーブル
|Column|Type|Options|
|------|----|-------|

|group_name|text|
## Association
- has_many :groups_users
- has_many :users, through: groups_users
- has_many :messages
