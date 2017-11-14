const { createContainer, Lifetime } = require('awilix');
const { scopePerRequest } = require('awilix-express');

const config = require('../config');
const Application = require('./app/Application');
const {
  CreateFolder,
  GetAllFolders,
  GetFolderById,
  UpdateUserById,
  DeleteUserById
} = require('./application/folder');

//const FolderSerializer = require('./adapter/rest/folder/UserSerializer');

const Server = require('./interfaces/http/Server');
const router = require('./interfaces/http/router');
const loggerMiddleware = require('./interfaces/http/logging/loggerMiddleware');
const errorHandler = require('./interfaces/http/errors/errorHandler');
const devErrorHandler = require('./interfaces/http/errors/devErrorHandler');

const logger = require('./infra/logging/logger');
const SequelizeUsersRepository = require('./infra/user/SequelizeUsersRepository');
const { database, User: UserModel } = require('./infra/database/models');

const container = createContainer();

// System
container
  .registerClass({
    app: [Application, { lifetime: Lifetime.SINGLETON }],
    server: [Server, { lifetime: Lifetime.SINGLETON }]
  })
  .registerFunction({
    router: [router, { lifetime: Lifetime.SINGLETON }],
    //logger: [logger, { lifetime: Lifetime.SINGLETON }]
  })
  .registerValue({ config });

// Middlewares
container
  .registerValue({
    containerMiddleware: scopePerRequest(container)
  });


// Operations
container.registerClass({
  createUser: CreateUser,
  getAllUsers: GetAllUsers,
  getUser: GetUser,
  updateUser: UpdateUser,
  deleteUser: DeleteUser
});

module.exports = container;
